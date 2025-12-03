// MathJax 3.2.2 配置文件
// 注意：如果页面有自己的内联配置，不要同时引用此文件
if (typeof window.MathJax === 'undefined') {
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
      processHtmlClass: 'tex2jax_process'
    },
    svg: {
      fontCache: 'global'
    },
    startup: {
      pageReady: function () {
        return MathJax.startup.defaultPageReady().then(function () {
          console.log('MathJax 已准备就绪');
        });
      }
    }
  };
}
