# react-movie-labs

I have created a movie app. In this app I have included multiple pages including home, favourites, upcoming, popular and top rated movies. I tried to add a now playing page but i couldn't successfully get that page working. Once i got the upcoming movies page working in the labs, creating other pages wasn't too diffiuclt. Although saying that I defininitely had my struggles at times. The first page I created outside of the labs was popular movies. This took me a while to get working as I didn't fully understand it. 

I think what confused me the most was the api folder. Once i finally understood it after getting it wrong multipe times I was able to repeat a very similar process for the other pages. Depending on the page sometimes the api code would change a little bit but overall it would remain fairly similar and I would then just have to rename the neccessary parts of the code to the new page name. 

The pages section was similar in a way. I had completed the upcoming.js page in the labs so I was able to use that as a template for the other pages which was extremely useful. 

Every time I would create a new file I would have to go into src/index.js and make sure to add a new route so that the page was able to be found. 

I would also go into siteHeader every time I would create a new page and I would make sure to add and rename a new label. I also made sure the path matched. I thought this was my issue with the now playing page but I've checked everything and can't find why it doesn't seem to be loading. It is probably just a misspelling or something that i cant seem to find and that's why i've left the code for it in place. 

Movie recomendations and crew/cast additions were different to the others. I used the movieDetailsPage.js for these two additions. Overall it was similar enough with what I had to do e.g. import it in, add a const = usequery and adjust the return accordingly. I got the return wrong at first and it took me a bit of time to figure it out but once I got it for recommendations I got it for crew/cast.

I am still having an issue where one or two films develop an error when you press movie info for some reason. Almost all of the movies work perfectly but one or two give back an error when you press more info. But for all the movies that work a list of recommended movies in bullet point form apears in movie info. The crew/cast appears just below the recommended movies. 
