// Lightweight highlight.js替代：仅保留 API，避免外部依赖
// 提供 hljs.highlightAll/hljs.highlightElement 空实现，确保调用不报错。
window.hljs = {
  highlightAll() {
    document.querySelectorAll('pre code').forEach((block) => {
      block.classList.add('hljs');
    });
  },
  highlightElement(el) {
    if (el) el.classList.add('hljs');
  }
};

