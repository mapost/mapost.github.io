/**
 * @module       jQuery page transition
 * @author       Roman Kravchuk (JeremyLuis)
 * @license      MIT
 * @version      1.1.3
 * @description  Smooth transition between pages
 */
function pageTransition(t){t=t||{},t.target=t.target||null,t.delay=t.delay||500,t.duration=t.duration||1e3,t.classIn=t.classIn||null,t.classOut=t.classOut||null,t.classActive=t.classActive||null,t.onReady=t.onReady||null,t.onTransitionStart=t.onTransitionStart||null,t.onTransitionEnd=t.onTransitionEnd||null,t.conditions=t.conditions||function(t,n){return!/(\#|callto:|tel:|mailto:|:\/\/)/.test(n)},t.target&&(setTimeout(function(){t.onReady&&t.onReady(t),t.classIn&&t.target.classList.add(t.classIn),t.classActive&&t.target.classList.add(t.classActive),t.duration&&(t.target.style.animationDuration=t.duration+"ms"),t.target.addEventListener("animationstart",function(){setTimeout(function(){t.classIn&&t.target.classList.remove(t.classIn),t.onTransitionEnd&&t.onTransitionEnd(t)},t.duration)})},t.delay),$("a").click(function(n){var a=n.currentTarget.getAttribute("href");if(t.conditions(n,a)){var s=this.href;n.preventDefault(),t.onTransitionStart&&t.onTransitionStart(t),t.classIn&&t.target.classList.remove(t.classIn),t.classOut&&t.target.classList.add(t.classOut),setTimeout(function(){window.location=s,/firefox/i.test(navigator.userAgent)&&setTimeout(function(){t.onReady&&t.onReady(t),t.classOut&&t.target.classList.remove(t.classOut)},1e3),/safari/i.test(navigator.userAgent)&&!/chrome/i.test(navigator.userAgent)&&(t.onReady&&t.onReady(t),t.classOut&&t.target.classList.remove(t.classOut))},t.duration)}}))}
