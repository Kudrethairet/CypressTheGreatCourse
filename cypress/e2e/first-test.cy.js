import HomePage from '../support/HomePage.cy'
import CategoryPage from '../support/CategoryPage.cy'
import BookSummaryPage from '../support/BookSummaryPage.cy'

const homepage = new HomePage()
        const categorypage = new CategoryPage()
        const booksummarypage = new BookSummaryPage()

    
describe('Verify The Great Course  Page', () =>{
    it('Verify books info, and Add to cart is disable when non of the options is selected, only when instant video is selected the Add To Cart will be enabled ', () => {
        
        homepage.visitHomePage()
        homepage.getCategoryElem().click()
        homepage.seletCategory('Health, Fitness & Nutrition')
        categorypage.verifyCatPageHeader('Health, Fitness & Nutrition')
        categorypage.selectBookElem('New ReleaseThe Power of Mind over BodySale')
        booksummarypage.verifyBookName('The Power of Mind over Body');
        booksummarypage.verifyBookAuthor('Jo Marchant, PhD')
        booksummarypage.verifyAddToCardButtonIsDisable()
        booksummarypage.instantVideoElem().click()
        booksummarypage.verifyAddToCardButtonIsEnabled()


    })
    it('Verify books info in Health, and Add to cart is disable when non of the options is selected, only when DVD is selected the Add To Cart will be enabled ', () => {
        const homepage = new HomePage()
        const categorypage = new CategoryPage()
        const booksummarypage = new BookSummaryPage()
        homepage.visitHomePage()
        homepage.getCategoryElem().click()
        homepage.seletCategory('Health, Fitness & Nutrition')
        categorypage.verifyCatPageHeader('Health, Fitness & Nutrition')
        categorypage.selectBookElem('New ReleaseThe Power of Mind over BodySale')
        booksummarypage.verifyBookName('The Power of Mind over Body');
        booksummarypage.verifyBookAuthor('Jo Marchant, PhD')
        booksummarypage.verifyAddToCardButtonIsDisable()
        booksummarypage.DVDElem().click()
        booksummarypage.verifyAddToCardButtonIsEnabled()


    })

    it('Verify books info in Music And Art 1', () => {
        const homepage = new HomePage()
        const categorypage = new CategoryPage()
        const booksummarypage = new BookSummaryPage()
        homepage.visitHomePage()
        homepage.getCategoryElem().click()
        homepage.seletCategory('Music & Fine Arts')
        categorypage.verifyCatPageHeader('Music & Fine Arts')
        categorypage.selectBookElem('Lost Art: The Stories of Missing Masterpieces')
        booksummarypage.verifyBookName('Lost Art: The Stories of Missing Masterpieces');
        booksummarypage.verifyBookAuthor('Noah Charney, PhD')
        booksummarypage.verifyAddToCardButtonIsDisable()
        booksummarypage.DVDElem().click()
        booksummarypage.verifyAddToCardButtonIsEnabled()
        booksummarypage.instantVideoElem().click()
        booksummarypage.verifyAddToCardButtonIsEnabled()

 })
    it('Verify books info in Music And Art 2', () => {
    const homepage = new HomePage()
    const categorypage = new CategoryPage()
    const booksummarypage = new BookSummaryPage()
    homepage.visitHomePage()
    homepage.getCategoryElem().click()
    homepage.seletCategory('Music & Fine Arts')
    categorypage.verifyCatPageHeader('Music & Fine Arts')
    categorypage.selectBookElem('How to Sing')
    booksummarypage.verifyBookName('How to Sing');
    booksummarypage.verifyBookAuthor('Dawn Pierce, AD')
    booksummarypage.verifyAddToCardButtonIsDisable()
    booksummarypage.DVDElem().click()
    booksummarypage.verifyAddToCardButtonIsEnabled()
    booksummarypage.instantVideoElem().click()
    booksummarypage.verifyAddToCardButtonIsEnabled()

}) 
it('Verify books info in Travel', () => {
    const homepage = new HomePage()
    const categorypage = new CategoryPage()
    const booksummarypage = new BookSummaryPage()
    homepage.visitHomePage()
    homepage.getCategoryElem().click()
   
    homepage.seletCategory('Travel')
    categorypage.verifyCatPageHeader('Travel')
    categorypage.selectBookElem('National Geographic Polar Explorations')
    booksummarypage.verifyBookName('National Geographic Polar Explorations');
    booksummarypage.verifyBookWithMultipleAuthor('span','Taught By Multiple Professors')
    booksummarypage.verifyAddToCardButtonIsDisable()
    booksummarypage.DVDElem().click()
    booksummarypage.verifyAddToCardButtonIsEnabled()
    booksummarypage.instantVideoElem().click()
    booksummarypage.verifyAddToCardButtonIsEnabled()

})



})