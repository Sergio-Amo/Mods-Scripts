/// Prevents tabsbar collapsing when you are over a tab stack tooltip/thumbanil
/// and fixes a vivaldi overflow bug (overflow gets calculated before tab animation causing it to not be removed when it should)

let sdar_target, sdar_tabbar, sdar_tabStrip = null,
    initInterval = window.setInterval(initFunction, 500);
function initFunction () {
  sdar_target = sdar_target || document.querySelector('#browser');
  sdar_tabStrip = document.querySelector('div.tab-strip');
  if (sdar_target && sdar_tabStrip) {
    clearInterval(initInterval);
    executeAfterDOM();
  }
}
/// Main function
function executeAfterDOM () {
  /*Prevent closing tabbar when hovering over tab popup thumbnails / tabGroup selector*/
  let sdar_stackToolTipObserver = new MutationObserver(mutations => {
    mutations.forEach(function(mutation) {
      mutation.target.firstElementChild 
        ? sdar_tabbar.classList.add("active") 
        : sdar_tabbar.classList.remove("active");
    });
  });
  
  //#browser Observer
  let sdar_browserObserver = new MutationObserver(mutations => {
    mutations.forEach(function(mutation) {
      // Prevents tabstrip from collapsing when mouse over tab stack tooltip 
      if (mutation.addedNodes.length && !sdar_tabbar && mutation.addedNodes[0]?.id==="vivaldi-tooltip") {
        sdar_tabbar = document.querySelector("#tabs-tabbar-container");
        sdar_tabbar.classList.add("active");
        sdar_stackToolTipObserver.disconnect();
        sdar_stackToolTipObserver.observe(mutation.addedNodes[0], {childList: true});
      } //else if (sdar_tabbar && sdar_tabStrip) {
        //sdar_browserObserver.disconnect();
        //Don't diconnect as it breaks on fullscreen DirtyFix
      //}
    });
  });
  // Takes care of tooltip functionality
  sdar_browserObserver.observe(sdar_target, {childList: true, subtree: true});

  //Overflow fix
  let tabStripObserver = new MutationObserver(mutations => {
    mutations.forEach(function(mutation) {
      if (mutation.removedNodes.length) {
        // Can't find the animation/transition to hook at so... timeout
        setTimeout(() => {
          if (sdar_tabStrip.scrollHeight <= sdar_tabStrip.clientHeight)
            sdar_tabStrip.parentNode.parentNode.classList.remove("overflow");
        }, 110);
        // Sometimes it's even slower as it may be collapsing a huge accordion stack
        // TODO: find the animation/transition or event to hook at.
        setTimeout(() => {
          if (sdar_tabStrip.scrollHeight <= sdar_tabStrip.clientHeight)
            sdar_tabStrip.parentNode.parentNode.classList.remove("overflow");
        }, 250);
      }
    })
  });
  tabStripObserver.observe(sdar_tabStrip, {childList: true, subtree: false});
}
