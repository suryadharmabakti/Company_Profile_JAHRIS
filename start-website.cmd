@echo off
cd /d "%~dp0"
echo Starting JAHRIS website...
echo Open http://localhost:3000 after the server is ready.
call npm.cmd run dev
echo.
echo The server stopped or could not start.
pause
