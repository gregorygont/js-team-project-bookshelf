!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},t={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in t){var s=t[e];delete t[e];var a={id:e,exports:{}};return i[e]=a,s.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,i){t[e]=i},e.parcelRequired7c6=s),s.register("4WFAO",function(e,i){var t=s("4Nugj"),a=s("dtK8v");let{appleBooksIconPath:o,bookShopIconPath:l,amazonIconPath:n,svgTrashIcon:r,emptyListStubImage:c}=(0,a.default)(),{divEl:d,paginationContainerPages:p,paginationContainerBackBtn:g,paginationContainerEndBtn:h,paginationsSection:f,startButton:m,previousButton:u,nextButton:v,endButton:_}=(0,t.default)(),b="storage-of-books",k=JSON.parse(localStorage.getItem(b))||[],y=Math.ceil(k.length/3),L=1,$=0,T=3,w=k.slice($,T);function E(e){return e.map(({_id:e,title:i,author:t,description:s,list_name:a,book_image:c,amazon_product_url:d,buy_links:[p,g]})=>`
        <article class="shopping__card">
          <div class="grid-img">
            <img class="shopping__card-img" src="${c}" alt="${i}" />
          </div>

          <div class="grid-title">
            <h3 class="shopping__card-title">${i}</h3>
            <p class="shopping__card-category">${a}</p>
          </div>

          <div class="grid-description">
            <p class="shopping__card-description">${s}</p>
          </div>

          <div class="grid-author">
            <p class="shopping__card-author">${t}</p>
          </div>

          <div class="grid-shoplist">
            <ul class="shopping__card-shoplist">
              <li class="store">
                <a "modal-shop-img" href="${d}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
                  <img class="modal-shop-img shopping-shopimg amazon" src="${n}" alt="Amazon link" alt="Amazon live page"/>
                </a>
              </li>
              <li class="store">
                <a "modal-shop-img" href="${p.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Apple Books link">
                  <img class="modal-shop-img shopping-shopimg apple" src="${o}" alt="Apple Books link" />
                </a>
              </li>
              <li class="store">
                <a "modal-shop-img" href="${g.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">
                  <img class="modal-shop-img shopping-shopimg book-shop" src="${l}" alt="BookShop link" />
                </a>
              </li>
            </ul>
          </div>
          <button class="shopping__card-btn" type="button" data-book-id="${e} aria-label="Remove book from shopping list">
            <svg class="icon-trash" data-book-id="${e}" width="17" height="17">
              <use href="${r}#icon-trash"></use>
            </svg>
          </button>
        </article>
        `).join("")}(function(){if(!k.length){d.innerHTML=`<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p><img class="is-empty__picture" src="${c}" alt="Shop is Empty"></div >`;return}d.insertAdjacentHTML("beforeend",E(w))})(),d.addEventListener("click",e=>{if(e.target.closest(".shopping__card-btn")){let i=e.target.getAttribute("data-book-id"),t=k.findIndex(e=>e._id===i);if(k.splice(t,1),localStorage.setItem(b,JSON.stringify(k)),k.length)M().length?(d.innerHTML=E(M()),console.log(M())):u.click(),function(e){let i=k.length/3;Math.round(i)===i&&e.lastElementChild.remove()}(p);else{d.innerHTML=`<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p><img class="is-empty__picture" src="${c}" alt="Shop is Empty"></div >`;return}k.length<=3&&(C(g),C(h),p.innerHTML="")}});for(let e=1;e<=y;e++){if(k.length<=3)return;let i=e,t=document.createElement("button");t.classList.add("paginations__btn"),t.classList.add("paginations__btn--pages"),t.textContent=e,O(g),O(h),t.addEventListener("click",()=>{L=i,S(),A(),x(m),x(_)}),p.appendChild(t)}function S(){d.innerHTML=""}function M(){return T=($=(L-1)*3)+3,k.slice($,T)}function A(){d.insertAdjacentHTML("beforeend",E(M()))}function x(e){e.disabled=!1}function N(e){e.disabled=!0}function O(e){e.style.display="flex"}function C(e){e.style.display="none"}function H(e){let i=document.querySelector(".active");i&&i.classList.remove("active"),e.classList.add("active")}p.firstChild.classList.add("active"),f.addEventListener("click",function(e){let i=document.querySelector(".active");if(console.log(e.target),"BUTTON"===e.target.tagName)switch(e.target){case u:L>1&&(L--,S(),A(),x(_),i.classList.remove("active"),i.previousElementSibling.classList.add("active"));break;case v:L<y&&(L++,S(),A(),x(m),i.classList.remove("active"),i.nextElementSibling.classList.add("active"));break;case m:L=1,S(),A(),N(m),x(_),H(p.firstChild);break;case _:L=y,S(),A(),N(_),x(m),H(p.lastElementChild)}}),p.addEventListener("click",function(e){"BUTTON"===e.target.tagName&&H(e.target)})}),s("luyKi"),s("3JZwd"),s("tp3re"),s("64MGL"),s("l5Qlz"),s("4WFAO"),s("c0gs0")}();
//# sourceMappingURL=shopping-list.931dd6ae.js.map
