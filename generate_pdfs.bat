@echo off
echo Génération des PDF en cours...

REM CV Design - Français
wkhtmltopdf --page-size A4 --margin-top 0 --margin-bottom 0 --margin-left 0 --margin-right 0 cv-fr.html CV-Koudakpo-Rodrigue-FR.pdf

REM CV Design - Anglais
wkhtmltopdf --page-size A4 --margin-top 0 --margin-bottom 0 --margin-left 0 --margin-right 0 cv-en.html CV-Koudakpo-Rodrigue-EN.pdf

REM CV ATS - Français
wkhtmltopdf --page-size A4 --margin-top 0 --margin-bottom 0 --margin-left 0 --margin-right 0 cv-ats-fr.html CV-ATS-Koudakpo-Rodrigue-FR.pdf

REM CV ATS - Anglais
wkhtmltopdf --page-size A4 --margin-top 0 --margin-bottom 0 --margin-left 0 --margin-right 0 cv-ats-en.html CV-ATS-Koudakpo-Rodrigue-EN.pdf

echo.
echo Génération terminée !
pause
