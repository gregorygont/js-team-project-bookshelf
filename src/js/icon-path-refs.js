export default function () {
    return {
      // Online stores icons
      appleBooksIconPath: new URL(
        '../images/books.png',
        import.meta.url
      ).href,
  
      bookShopIconPath: new URL('../images/booksshop.png', import.meta.url)
        .href,
  
      amazonIconPath: new URL('../images/amazon.png', import.meta.url).href,
  
       // Empty list stub image
      emptyListStubImage: new URL('../images/book-tab-desk-1x.png', import.meta.url)
        .href,
  
      // SVG
      svgTrashIcon: new URL('../images/icons.svg', import.meta.url),
    };
  }