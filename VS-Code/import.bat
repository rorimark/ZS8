@echo off
setlocal

:: Папка с настройками VS Code
set VSCODE_DIR=%APPDATA%\Code\User
set BACKUP_DIR=%USERPROFILE%\Desktop\vscode_backup

if not exist "%BACKUP_DIR%" (
    echo Папка %BACKUP_DIR% не найдена!
    echo Положи туда свой бэкап и попробуй снова.
    pause
    exit /b
)

echo Восстанавливаю настройки...
xcopy "%BACKUP_DIR%\User" "%VSCODE_DIR%" /E /I /Y >nul

echo Устанавливаю расширения...
for /f %%i in (%BACKUP_DIR%\extensions.txt) do code --install-extension %%i

echo =====================================
echo Восстановление завершено!
echo Перезапусти VS Code, чтобы изменения вступили в силу.
echo =====================================
pause
