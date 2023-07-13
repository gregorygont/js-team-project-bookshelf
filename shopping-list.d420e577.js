var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},t={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in t){var s=t[e];delete t[e];var a={id:e,exports:{}};return i[e]=a,s.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,i){t[e]=i},e.parcelRequired7c6=s),s.register("jJ57b",function(e,i){var t=s("krGWQ"),a=s("iO0l9");let{appleBooksIconPath:o,bookShopIconPath:l,amazonIconPath:n,svgTrashIcon:r,emptyListStubImage:c}=(0,a.default)(),{divEl:d,paginationContainerPages:p,paginationContainerBackBtn:g,paginationContainerEndBtn:h,paginationsSection:m,startButton:f,previousButton:u,nextButton:b,endButton:v}=(0,t.default)(),_="storage-of-books",k=JSON.parse(localStorage.getItem(_))||[],y=Math.ceil(k.length/3),L=1,T=0,$=3,E=k.slice(T,$);function w(e){return e.map(({_id:e,title:i,author:t,description:s,list_name:a,book_image:c,amazon_product_url:d,buy_links:[p,g]})=>`
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
        `).join("")}(function(){if(!k.length){d.innerHTML=`<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p><img class="is-empty__picture" src="${c}" alt="Shop is Empty"></div >`;return}d.insertAdjacentHTML("beforeend",w(E))})(),d.addEventListener("click",e=>{if(e.target.closest(".shopping__card-btn")){let i=e.target.getAttribute("data-book-id"),t=k.findIndex(e=>e._id===i);if(k.splice(t,1),localStorage.setItem(_,JSON.stringify(k)),k.length)C().length?(d.innerHTML=w(C()),console.log(C())):u.click(),function(e){let i=k.length/3;Math.round(i)===i&&e.lastElementChild.remove()}(p);else{d.innerHTML=`<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p><img class="is-empty__picture" src="${c}" alt="Shop is Empty"></div >`;return}k.length<=3&&(H(g),H(h),p.innerHTML="")}});for(let e=1;e<=y;e++){if(k.length<=3)return;let i=e,t=document.createElement("button");t.classList.add("paginations__btn"),t.classList.add("paginations__btn--pages"),t.textContent=e,A(g),A(h),t.addEventListener("click",()=>{L=i,S(),M(),x(f),x(v)}),p.appendChild(t)}function S(){d.innerHTML=""}function C(){return $=(T=(L-1)*3)+3,k.slice(T,$)}function M(){d.insertAdjacentHTML("beforeend",w(C()))}function x(e){e.disabled=!1}function N(e){e.disabled=!0}function A(e){e.style.display="flex"}function H(e){e.style.display="none"}function O(e){let i=document.querySelector(".active");i&&i.classList.remove("active"),e.classList.add("active")}p.firstChild.classList.add("active"),m.addEventListener("click",function(e){let i=document.querySelector(".active");if(console.log(e.target),"BUTTON"===e.target.tagName)switch(e.target){case u:L>1&&(L--,S(),M(),x(v),i.classList.remove("active"),i.previousElementSibling.classList.add("active"));break;case b:L<y&&(L++,S(),M(),x(f),i.classList.remove("active"),i.nextElementSibling.classList.add("active"));break;case f:L=1,S(),M(),N(f),x(v),O(p.firstChild);break;case v:L=y,S(),M(),N(v),x(f),O(p.lastElementChild)}}),p.addEventListener("click",function(e){"BUTTON"===e.target.tagName&&O(e.target)})}),s("63nI0"),s("aTNUQ"),s("j4h6C"),s("bHKmf"),s("aC5CC"),s("jJ57b"),s("eq7JK");
//# sourceMappingURL=shopping-list.d420e577.js.map
