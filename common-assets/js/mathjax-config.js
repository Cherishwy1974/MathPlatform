// MathJax 3.2.2 配置文件
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,
    tags: 'ams',
    tagSide: 'right',
    tagIndent: '0.8em',
    multlineWidth: '85%',
    packages: ['base', 'ams', 'noerrors', 'noundefined']
  },
  options: {
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process',
    renderActions: {
      findScript: [10, function (doc) {
        const math = document.querySelectorAll('script[type^="math/tex"]');
        for (let i = 0; i < math.length; i++) {
          const script = math[i];
          const match = script.type.match(/math\/(?:tex|latex);(.*)/);
          const latex = (match ? decodeURIComponent(match[1]) : script.textContent);
          const span = document.createElement('span');
          span.innerHTML = latex;
          script.parentNode.replaceChild(span, script);
        }
      }, '']
    }
  },
  svg: {
    fontCache: 'global'
  },
  startup: {
    ready: function () {
      // 等待DOM加载完成后渲染
      MathJax.startup.defaultReady();
      console.log('MathJax 已准备就绪');
    }
  }
};
