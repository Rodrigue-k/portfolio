$ErrorActionPreference = 'Stop'
$workspace = 'D:\projects\portfolio'
$documents = 'C:\Users\kouda\Downloads\Documents'
$destination = Join-Path $documents 'CV'
$current = Join-Path $destination 'Actuels'
$archive = Join-Path $destination 'Archives\2026-10-16'
$business = Join-Path $destination 'Autres-profils'
foreach ($directory in @($current, $archive, $business)) {
    New-Item -ItemType Directory -Path $directory -Force | Out-Null
}
$names = @('CV_Rodrigue_Koudakpo_Developpeur.pdf', 'CV_Rodrigue_Koudakpo.pdf', 'CV-Koudakpo-Rodrigue-FR.pdf', 'CV Rodrigue Koudakpo Business Developer.pdf')
foreach ($name in $names) {
    $source = Join-Path $documents $name
    if (Test-Path -LiteralPath $source) {
        $folder = if ($name -eq 'CV Rodrigue Koudakpo Business Developer.pdf') { $business } else { $archive }
        $target = Join-Path $folder $name
        if (Test-Path -LiteralPath $target) { throw "Destination already exists: $target" }
        Move-Item -LiteralPath $source -Destination $target
    }
}
Copy-Item -LiteralPath (Join-Path $workspace 'public\cv\CV_Rodrigue_Koudakpo_Developpeur.pdf') -Destination (Join-Path $current 'CV_Rodrigue_Koudakpo_Developpeur_Formateur_FR.pdf')
Copy-Item -LiteralPath (Join-Path $workspace 'public\cv\CV_Rodrigue_Koudakpo_Developer_EN.pdf') -Destination (Join-Path $current 'CV_Rodrigue_Koudakpo_Developer_Trainer_EN.pdf')
@'
CV À UTILISER

Actuels : versions française et anglaise mises à jour le 16 octobre 2026.
Titre : Développeur Flutter & Full Stack · Formateur.
Archives/2026-10-16 : précédentes versions conservées sans suppression.
Autres-profils : ancien CV Business Developer, distinct du profil développeur/formateur.

Sources de référence : D:\projects\portfolio\docs\cv\source
PDF du portfolio : D:\projects\portfolio\public\cv
'@ | Set-Content -LiteralPath (Join-Path $destination 'LIRE-MOI.txt') -Encoding utf8
Get-ChildItem -LiteralPath $destination -Recurse -File | Select-Object FullName, Length
