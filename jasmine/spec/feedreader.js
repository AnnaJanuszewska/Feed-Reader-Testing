/*
    
    This work was inspired by MATTHEW CRANFORD "Feed Reader Walkthrough":
    https://matthewcranford.com/feed-reader-walkthrough-part-2-writing-the-first-tests/ 

    & 

    Udacity Webinar: FeedReader Testing (P4) Sept-23 walk-thru with @Lloan
    https://udenver.zoom.us/recording/play/-1Agy4wDME0_ab_zaNUiWquZOWdb4qQvCJENURKWT4CDtHWqXrE0yI7DSi8kfvm5?continueMode=true

    so there could be some similarities to those two walkthroughs.

*/


/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

 $(function() {

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it("all feeds have an url defined and url is not an empty string", function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it("all feeds have a name defined and name is not an empty string", function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    /* A new test suite named "The menu" */

    describe("The menu", function() { 

        /* This is a test that ensures the menu element is
         * hidden by default.
        */

        it("is hidden by default", function() {
            const body = document.querySelector("body");
            expect(body.classList.contains("menu-hidden")).toBe(true);
        });


         /* This is a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        
        it("changes visibility when clicked", function() {
            const body = document.querySelector("body");
            const menu = document.querySelector(".menu-icon-link");

            menu.click();
            expect(body.classList.contains("menu-hidden")).toBe(false);
  
            menu.click();
            expect(body.classList.contains("menu-hidden")).toBe(true);
        });
    });

    /* A new test suite named "Initial Entries" */

    describe("Initial Entries", function(){

        /* This is a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it("at least 1 entry found when loadFeed is called and done", function() {
            const feed = document.querySelector(".feed");
            expect(feed.children.length > 0).toBe(true);
        });

    });

    /* A new test suite named "New Feed Selection" */

    describe("New Feed Selection", function() {
  
        let firstFeed;
        let secondFeed;

        /* This is a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
    
        beforeEach(function(done) {
             loadFeed(0);
             firstFeed = $(".feed").html;
             done();
         
             loadFeed(1);
             secondFeed = $(".feed").html;
             done();
        });

        it("content changes when new feed is loaded", function() {
            expect(firstFeed === secondFeed).toBe(false);
 
        });
    });
}());
