@echo off
rem Setzt ANTHROPIC_API_KEY dauerhaft fuer den angemeldeten Windows-Benutzer.
rem Der DevContainer uebernimmt die Variable beim Oeffnen in VS Code.
rem Aufruf: set-anthropic-key.bat [Schluessel], ohne Schluessel fragt das Skript nach.
setlocal

set "KEY=%~1"
if "%KEY%"=="" set /p "KEY=Anthropic API-Schluessel (sk-ant-...): "

if "%KEY%"=="" (
    echo Kein Schluessel eingegeben, nichts geaendert.
    goto fail
)
if /i not "%KEY:~0,7%"=="sk-ant-" (
    echo Der Schluessel beginnt nicht mit sk-ant-, nichts geaendert.
    goto fail
)

setx ANTHROPIC_API_KEY "%KEY%" >nul
if errorlevel 1 (
    echo Setzen der Variablen fehlgeschlagen.
    goto fail
)

echo ANTHROPIC_API_KEY ist gesetzt.
echo Jetzt VS Code ganz beenden, alle Fenster, und neu starten.
echo Erst dann sieht der Container den Schluessel.
endlocal
pause
exit /b 0

:fail
endlocal
pause
exit /b 1
