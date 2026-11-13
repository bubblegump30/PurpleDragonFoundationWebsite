"""Dependency-free structural and local-link checks for the published static site."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
from collections import Counter
import re

root=Path(__file__).resolve().parents[1]/'dist'
class Page(HTMLParser):
 def __init__(self,text):
  super().__init__(convert_charrefs=True);self.ids=[];self.refs=[];self.errors=[];self.h1=0;self.feed(text)
 def handle_starttag(self,tag,attrs):
  names=[k for k,v in attrs]
  self.errors.extend('duplicate attribute '+k for k,n in Counter(names).items() if n>1)
  a=dict(attrs)
  if 'id' in a:self.ids.append(a['id'])
  if tag=='h1':self.h1+=1
  if tag=='img' and 'alt' not in a:self.errors.append('image missing alt')
  for key in ['href','src']:
   if key in a:self.refs.append(a[key])
docs={f.name:Page(f.read_text(encoding='utf-8')) for f in root.glob('*.html')}
errors=[]
for name,page in docs.items():
 errors.extend(name+': '+e for e in page.errors)
 errors.extend(name+': duplicate ID '+k for k,n in Counter(page.ids).items() if n>1)
 if page.h1!=1:errors.append(name+': expected one h1')
 if 'theme-select' not in page.ids:errors.append(name+': missing theme selector')
 text=(root/name).read_text(encoding='utf-8')
 if 'mailto:kyle@purpledragonfoundationltd.xyz' not in text:errors.append(name+': company email missing')
 if re.search(r'IDENTITIES\s+for\s+Android',text,re.I):errors.append(name+': cancelled app returned')
 for ref in page.refs:
  url=urlsplit(ref)
  if url.scheme or url.netloc:continue
  target=unquote(url.path) or name
  if not (root/target).is_file():errors.append(name+': missing '+ref)
  if url.fragment and target in docs and unquote(url.fragment) not in docs[target].ids:errors.append(name+': missing anchor '+ref)
if errors:raise SystemExit('\n'.join(errors))
print(f'PASS: {len(docs)} pages; local links, anchors, IDs, attributes, image alternatives, headings, themes and email.')
