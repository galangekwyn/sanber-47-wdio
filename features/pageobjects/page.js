const { browser } = require('@wdio/globals')

/*
Create and export a module with class "BasePage". This class contains a function.
This class behaves as a Parent class, which contains the common functionalities, that can be inherited by child classes.
This module can be imported and called from the child classes.
*/

module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        browser.url(path);
    }
}
