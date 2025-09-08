// js/boo.js

document.addEventListener('DOMContentLoaded', () => {
  // ヘッダー部分
  const headerHtml = `
      <header class="header-style-1">
          <header class="large-title-header-1">
              <h1>悪士多 龍のページ（現在工事中）</h1>
          </header>
          <div class="container">
              <nav>
                  <ul>
                      <li class="nav-list-item">
                          <a href="/">Home</a>
                      </li>
                      <li class="nav-list-item">
                          <a href="/category/music.html">音楽系</a>
                      </li>
                      <li class="nav-list-item">
                          <a href="/category/game_create.html">ゲーム制作（予定）関係</a>
                      </li>
                      <li class="nav-list-item">
                          <a href="/category/illustration.html">イラスト関係</a>
                      </li>
                      <li class="nav-list-item">
                          <a href="/category/novels.html">文章作品関係</a>
                      </li>
                      <li class="nav-list-item">
                          <a href="/category/monologue.html">ボソボソとなにか言っているようだ</a>
                      </li>
                      <li class="nav-list-item">
                          <a href="/category/links.html">リンク集</a>
                      </li>
                  </ul>
              </nav>
              <div class="search-box-header">
                  <div class="gcse-searchbox-only"></div>
              </div>
          </div>
      </header>
  `;

  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
      headerPlaceholder.insertAdjacentHTML('beforebegin', headerHtml);
      headerPlaceholder.remove();
  }

  // フッター部分
  const footerHtml = `
      <footer class="footer-style-1">
          <div class="container">
              <p>悪士多 龍のページ All rights reserved.</p>
              <nav>
                  <ul>
                  </ul>
              </nav>
          </div>
      </footer>
  `;

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
      footerPlaceholder.insertAdjacentHTML('afterend', footerHtml);
      footerPlaceholder.remove();
  }
});