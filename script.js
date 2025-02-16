


// get user selected text
const getUserSelectedText = () => {
    return window.getSelection().toString();
}
// knowing when user gets to bottom of page

 window.onscroll = () => {
    if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        console.log('you are at the end of the page.')
    }
 }

 //taking user back to top
 const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

 // darkmode detection

 const isDarkMode = () => {
    return window.matchMedia('prefers-color-scheme: dark)').matches;
 }

 
