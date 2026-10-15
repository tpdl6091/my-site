console.log('이상하게 됨')

// 다크 모드 토글 (선택은 localStorage에 저장)
const themeToggle = document.createElement('button')
themeToggle.className = 'theme-toggle'
themeToggle.type = 'button'
document.body.appendChild(themeToggle)

function applyTheme(dark) {
  document.body.classList.toggle('dark', dark)
  themeToggle.textContent = dark ? '☀️' : '🌙'
  themeToggle.setAttribute('aria-label', dark ? '라이트 모드로 전환' : '다크 모드로 전환')
}

function loadTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
  } catch (e) {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

applyTheme(loadTheme())

themeToggle.addEventListener('click', () => {
  const dark = !document.body.classList.contains('dark')
  applyTheme(dark)
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  } catch (e) {}
})
