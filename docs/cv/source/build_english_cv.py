from pathlib import Path
from html import escape
from reportlab.pdfgen import canvas
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Flowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from pypdf import PdfReader
import pypdfium2

ROOT = Path(__file__).resolve().parents[3]
OUT = ROOT / 'public/cv/CV_Rodrigue_Koudakpo_Developer_EN.pdf'
for name, filename in [('Calibri','calibri.ttf'),('Calibri-Bold','calibrib.ttf'),('Calibri-Italic','calibrii.ttf'),('Calibri-BoldItalic','calibriz.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(Path('C:/Windows/Fonts') / filename)))
pdfmetrics.registerFontFamily('Calibri',normal='Calibri',bold='Calibri-Bold',italic='Calibri-Italic',boldItalic='Calibri-BoldItalic')
WIDTH=A4[0]-85
body=ParagraphStyle('body',fontName='Calibri',fontSize=9,leading=10.8,spaceAfter=.75)
company=ParagraphStyle('company',parent=body,fontName='Calibri-Italic',fontSize=9.5,leading=11.4,spaceAfter=1)
role_style=ParagraphStyle('role',parent=body,fontName='Calibri-Bold',fontSize=11.5,leading=13.8)
date_style=ParagraphStyle('date',parent=body,fontName='Calibri-Bold',textColor=colors.HexColor('#595959'),alignment=2)
bullet_style=ParagraphStyle('bullet',parent=body,leftIndent=15,firstLineIndent=0,bulletIndent=5,spaceAfter=.75)
story=[]

def para(text,style=body):
    story.append(Paragraph(text,style))
class SectionBar(Flowable):
    def __init__(self,text):
        Flowable.__init__(self); self.text=text; self.width=WIDTH; self.height=18
    def draw(self):
        c=self.canv;c.setFillColor(colors.HexColor('#e7e7e7'));c.rect(-7,0,self.width+7,15,fill=1,stroke=0)
        c.setFillColor(colors.HexColor('#202020'));c.rect(-7,0,5,15,fill=1,stroke=0)
        c.setFont('Calibri-Bold',11.5);c.drawString(3,3,self.text)
def section(text):
    story.append(Spacer(1,5));story.append(SectionBar(text));story.append(Spacer(1,3))
def role(title,date,employer,lines):
    story.append(Spacer(1,3))
    row=Table([[Paragraph(escape(title),role_style),Paragraph(escape(date),date_style)]],colWidths=[WIDTH*.69,WIDTH*.31])
    row.setStyle(TableStyle([('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),1),('VALIGN',(0,0),(-1,-1),'BOTTOM')]))
    story.append(row);para(escape(employer),company)
    for line in lines: para(line,bullet_style);story[-1].bulletText='•'

def education(left,right):
    row=Table([[Paragraph(left,body),Paragraph(escape(right),date_style)]],colWidths=[WIDTH*.78,WIDTH*.22])
    row.setStyle(TableStyle([('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),1),('VALIGN',(0,0),(-1,-1),'TOP')]))
    story.append(row)

para('<b>KOUDAKPO</b> <font color="#595959">Komi Rodrigue</font>',ParagraphStyle('name',fontName='Calibri',fontSize=30,leading=34,spaceAfter=1))
para('<b>MOBILE &amp; WEB APPLICATION DEVELOPER  ·  FLUTTER  ·  NEXT.JS</b>',ParagraphStyle('subtitle',parent=body,fontSize=10.5,leading=12.6,spaceAfter=3.5))
para('Lomé, Togo   ·   +228 97 38 51 73   ·   koudakporodrigue03@gmail.com')
para('<link href="https://rodriguekoudakpo.com"><u>rodriguekoudakpo.com</u></link>   ·   <link href="https://linkedin.com/in/rodrigue-koudakpo"><u>linkedin.com/in/rodrigue-koudakpo</u></link>   ·   <link href="https://github.com/Rodrigue-k"><u>github.com/Rodrigue-k</u></link>')
section('PROFILE')
para('Self-taught developer: I have been programming since 2019 and specializing in Flutter since 2022. I design and deliver mobile and web applications from idea to deployment, addressing real constraints: variable connectivity, mobile payments and non-technical users. Two freelance engagements delivered to production (App Store and Play Store), several published personal products, partner at Darollo Technologies Corporation, and independent developer under the Koudatek personal brand. Digital Project Management student at ESCEN.')
section('TECHNICAL SKILLS')
for text in [
'<b>Mobile &amp; web:</b> Flutter, Dart, Next.js, TypeScript, JavaScript, HTML/CSS',
'<b>Backend &amp; data:</b> Firebase (Firestore, Cloud Functions), Supabase, Appwrite, REST APIs, C#, Python (Flask)',
'<b>Architecture:</b> Clean Architecture, Riverpod / Provider, MVC, offline-first applications with synchronization',
'<b>Tools &amp; deployment:</b> Git/GitHub, Figma, Cloudflare, Oracle Cloud, Vercel, Netlify, App Store, Play Store and Microsoft Store publishing',
'<b>Other:</b> Java, Unity, digital project management, presenting technical solutions to non-technical audiences'
]:para(text)
section('PROFESSIONAL EXPERIENCE')
role('Partner & Product Developer','Since January 2025','Darollo Technologies Corporation (DTC) · Lomé, Togo',[
'Developed and maintained iOS and Android mobile applications (Flutter), integrating a C# backend',
'Independently managed projects end to end, from architecture to delivery, including client relations',
'Delivered the mobile application (Play Store) and website for <b>Miabé Hackathon</b>'
])
role('Freelance Mobile Developer','October 2025 - March 2026',"Software Box (formerly Evee Engineering) · Côte d'Ivoire, remote",[
'Took over an existing Flutter codebase, fixed critical bugs and shipped to production',
'Completely rebuilt an application following in-depth UX analysis; provided post-release support and updates',
'<b>2 applications published</b> on the App Store and Play Store: Grand Voyageur (ride sharing) and Ticketto (event ticketing)'
])
role('Independent Developer','Since 2022','Koudatek personal brand · Lomé, Togo',[
'Built business software for shops: ledger management for a bakery and stock management for an eyewear store',
'Developed and published personal products: Woez, Cherish, S-Contact, Klavia Kids, ciForms'
])
role('Field Sales Representative - Budget Pilot','June - September 2026','B Pilot SARL · Lomé, Togo',[
'Designed and built an internal field-tracking and PDF reporting tool, used daily by 4 sales representatives',
'Prospected more than 300 merchants and artisans, understanding user needs through direct field contact'
])
role('Data Processing Operator','March - June 2025','CAGECFI SA · Lomé Land Registry, Togo',[
'Digitized land registers, performed quality control and analyzed entered data in a national digitization project'
])
section('SELECTED PROJECTS')
for text in [
'<b>ciForms</b> - Flutter field-data collection application for low-connectivity areas: offline mode, batch synchronization (Supabase), AI-generated forms',
'<b>Grand Voyageur</b> - ride-sharing application for West Africa (Flutter, Clean Architecture) · App Store and Play Store',
'<b>Ticketto</b> - event discovery and mobile tickets · App Store and Play Store',
'<b>Miabé Hackathon</b> - official application of the pan-African technology competition, present in 15 countries · Play Store',
'<b>Woez</b> - local accommodation booking with adapted payments (Wave, Orange Money) · Play Store and App Store',
'<b>Awa</b> - WhatsApp chatbot directing victims of gender-based violence to support services in Togo (Python/Flask, Gemini) · Hack4Peace 2026',
'<b>Other</b> - Cherish (personalized greeting cards), S-Contact (digital business card with QR code), Klavia Kids (typing software for children, Microsoft Store), EcoMap, Make 10!'
]:para(text,bullet_style);story[-1].bulletText='•'
section('EDUCATION & CERTIFICATIONS')
education('<b>Bachelor’s in Digital Project Management</b> - ESCEN, Lomé','In progress (Year 2)')
education('<b>Bachelor’s in Mathematics</b> - University of Lomé','Resuming studies')
education('<b>Baccalaureate, Science track C</b> - Lycée de Kpodzi','2021')
education('<b>CS50P - Introduction to Programming with Python</b> - Harvard / edX','October 2024')
education('<b>Junior Unity Developer</b> - Unity Technologies','2024')
para('<b>Languages:</b> French (native) · English (technical proficiency, B2)')

SimpleDocTemplate(str(OUT),pagesize=A4,leftMargin=42.5,rightMargin=42.5,topMargin=24,bottomMargin=21,title='Komi Rodrigue Koudakpo - Mobile & Web Application Developer',author='Komi Rodrigue Koudakpo').build(story)
r=PdfReader(OUT)
print('Created',OUT,'pages:',len(r.pages))
qa=ROOT/'tmp/cv-qa';qa.mkdir(parents=True,exist_ok=True)
doc=pypdfium2.PdfDocument(str(OUT))
for i in range(len(doc)):doc[i].render(scale=1.5).to_pil().save(str(qa/f'en-{i+1}.png'))
