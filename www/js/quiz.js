var score = 0;
var scoreShows = 0;
var scoreWw = 0;
var scoreCartoons = 0;


/**********       AMERICAN HISTORY        **************/



/*********** < 1900 ***************/
var  civil = [
	{
		'question': "What event is Harriet Tubman mostly linked with?",
		'choices': ["Native American rights", "Underground Railroad", "Shay's Rebellion", "Civil War"],
		'correctChoice': "Underground Railroad",
		flag: 0
	},
	{
		'question': "Where was Jamestown established?",
		'choices': ["New Hampshire", "Delaware", "Maryland", "Virginia", "South Carolina"],
		'correctChoice': "Virginia",
		flag: 0
	},
	{
		'question': "What year did the U.S. annex Hawaii?",
		'choices': ["1870","1886","1898", "1879"],
		'correctChoice': "1898",
		flag: 0
	},
	{
		'question': "Which Court Case paved the way for the Jim Crow laws in the South?",
		'choices': ["Plessy v. Ferguson", "Engel v. Vitale", "Marbury v. Madison", "McCulloch v. Maryland"],
		'correctChoice': "Plessy v. Ferguson",
		flag: 0
	},

	{
		'question': "What year did the American Revolution begin?",
		'choices': ["1773", "1774", "1775", "1776"],
		'correctChoice': "1775",
		flag: 0
	},
	{
		'question': "Which nation won the French and Indian War (also known as the Seven Year's War)?",
		'choices': ["Britain", "France", "Neither side won"],
		'correctChoice': "Britain",
		flag: 0
	},
	{
		'question': "Which of the following presidents was impeached by the House of Representatives? ",
		'choices': ["William Harrison", "Andrew Johnson", "Ulysses Grant", "James Buchanan"],
		'correctChoice': "Andrew Johnson",
		flag: 0
	},

	{
		'question': "When did the Mexican-American War take place?",
		'choices': ["1826", "1846", "1849", "1834", "1853"],
		'correctChoice': "1846",
		flag: 0
	},

	{
		'question': "Who was the second president of the United States and what year did he begin his term? ",
		'choices': ["Thomas Jefferson, 1797", "Thomas Jefferson, 1793", "John Adams, 1797", "John Adams, 1793"],
		'correctChoice': "John Adams, 1797",
		flag: 0
	},
	{
		'question': "Which was the first state to secede from the Union in 1861?",
		'choices': ["Mississippi", "North Carolina", "Alabama", "South Carolina"],
		'correctChoice': "South Carolina",
		flag: 0
	},
	
]




/*********************  > 1900s ************************/

var  ww = [
	{
		'question': "When did the US enter World War I?",
		'choices': ["1914", "1917", "1920", "1921"],
		'correctChoice': "1917",
		flag: 0
	},
	{
		'question': "When does Japan Attack Pearl Harbor?",
		'choices': ["December 17,1940", "November 7, 1941", "December 7, 1941", "December 7, 1939", "December 15, 1941"],
		'correctChoice': "December 7, 1941",
		flag: 0
	},
	{
		'question': "Which president signed the Voting Rights Act of 1965, guaranteeing African Americans the right to vote?",
		'choices': ["Dwight D. Eisenhower","Grover Cleveland","Lyndon Johnson", "Richard Nixon"],
		'correctChoice': "Lyndon Johnson",
		flag: 0
	},
	{
		'question': "What year did the San Francisco earthquake happen, which killed over 500 people?",
		'choices': ["1915", "1970", "1900", "1906"],
		'correctChoice': "1906",
		flag: 0
	},

	{
		'question': "What year did the US join Vietnam War?",
		'choices': ["1955", "1965", "1980", "1976"],
		'correctChoice': "1965",
		flag: 0
	},
	{
		'question': "What year did Puerto Rico become part of the US?",
		'choices': ["1952", "1959", "1930","1960"],
		'correctChoice': "1952",
		flag: 0
	},
	{
		'question': "What year did Martin Luther King Jr. deliver his 'I Have A Dream' speech?",
		'choices': ["1971", "1963", "1960", "1969"],
		'correctChoice': "1963",
		flag: 0
	},

	{
		'question': "The 'Bay of Pigs' American invasion occured in which nation?",
		'choices': ["Mexico", "El Salvador", "Panama", "Cuba", "Costa Rica"],
		'correctChoice': "Cuba",
		flag: 0
	},

	{
		'question': "What year was President Barack Obama elected president of the US?",
		'choices': ["2007", "2006", "2008", "2009"],
		'correctChoice': "2008",
		flag: 0
	},
	{
		'question': "How many people are estimated to have died in the 9/11 terrorist attack on the US?",
		'choices': ["around 2000 people", "around 3000 people", " around 1500 people", "over 5000 people"],
		'correctChoice': "around 3000 people",
		flag: 0
	},
	
]





/****************** END > 1900s **************************/






/******************************      TV SHOWS        ****************************************/
var  shows = [
	{
		'question': "On 'Friends', what was Rachel's error on her resume in the episode with all the poker?",
		'choices': ["She spelled 'computer' wrong", "Spelled her name wrong", "Forgot to include contact information"],
		'correctChoice': "She spelled 'computer' wrong",
		flag: 0
	},
	{
		'question': "On boy meets world, what is the crazy older brother's name?",
		'choices': ["Henry", "Patrick", "James", "Eric", "Daniel"],
		'correctChoice': "Henry",
		flag: 0
	},
	{
		'question': "Who was DJ's best friend's name on 'Full House'",
		'choices': ["Jessica","Kylie","Stephanie", "Kimmy"],
		'correctChoice': "Kimmy",
		flag: 0
	},
	{
		'question': "In 'Saved by the Bell', what were Zack and Kelly dressed up as the night they broke up?",
		'choices': ["monkeys", "Romeo and Juliet", "clowns", "Adam and Eve"],
		'correctChoice': "Romeo and Juliet",
		flag: 0
	},

	{
		'question': "In Growing Pains, What was boners dad's name?",
		'choices': ["Jefferson", "Robert", "Sylvester", "Edward"],
		'correctChoice': "Sylvester",
		flag: 0
	},
	{
		'question': "On an episode of 'Friends', what did Jean-Claude Van Damme boast he could do?",
		'choices': ["crush a walnut with his butt", "take cap off bottle with his eye", "touch his nose with his tongue"],
		'correctChoice': "crush a walnut with his butt",
		flag: 0
	},
	{
		'question': "In Fresh Prince of Bel-Air what was the butlers name?",
		'choices': ["Phil", "Geoffrey", "Grant", "George"],
		'correctChoice': "Geoffrey",
		flag: 0
	},

	{
		'question': "How did Danny Tanner's wife die on 'Full House'?",
		'choices': ["cancer", "car crash", "drug overdose", "unknown circumstances"],
		'correctChoice': "car crash",
		flag: 0
	},

	{
		'question': "Which of the following was Chandler's girlfriend at some point in 'Friends'?",
		'choices': ["Jannette", "Julia", "Janice", "Jasmine"],
		'correctChoice': "Janice",
		flag: 0
	},
	{
		'question': "On Saved By The Bell, what was the name of the beach club that the gang worked at?",
		'choices': ["Malibu Sands Beach Club", "Venice Beach club", "Aloha Beach Club", "none of the above"],
		'correctChoice': "Malibu Sands Beach Club",
		flag: 0
	},
	
]



/******************************      TV SHOWS Cartoons       ****************************************/
var  cartoons = [
	{
		'question': "Who did Arnold live with on 'Hey Arnold'?",
		'choices': ["parents", "aunt and uncle", "grandparents"],
		'correctChoice': "grandparents",
		flag: 0
	},
	{
		'question': "How did Tommy's family know Angelica's family in 'Rugrats'?",
		'choices': ["neighbors", "family friends", "relatives"],
		'correctChoice': "relatives",
		flag: 0
	},
	{
		'question': "True or False: In 'Rocko's Modern Life', Rocko was a Kangaroo.",
		'choices': ["True","False"],
		'correctChoice': "False",
		flag: 0
	},
	{
		'question': "What was the name of Arnold's best friend in 'Hey Arnold'?",
		'choices': ["Eugene", "Alfred", "Gerald", "Doug"],
		'correctChoice': "Gerald",
		flag: 0
	},

	{
		'question': "What is the name of Dexter's annoying sister in 'Dexter's Laboratory'?",
		'choices': ["Jesse", "Deedee", "Meemee", "Lili"],
		'correctChoice': "Deedee",
		flag: 0
	},
	{
		'question': "In 'Doug', what was the name of Doug's dog?",
		'choices': ["Porkchop", "Peppers", "Max"],
		'correctChoice': "Porkchop",
		flag: 0
	},
	{
		'question': "In 'Courage The Cowardly Dog', what was the setting of the show?",
		'choices': ["Middle of Nowhere", "city", "small town", "Suburbs"],
		'correctChoice': "Middle of Nowhere",
		flag: 0
	},

	{
		'question': "What is the name of Tommy's little brother in 'Rugrats'?",
		'choices': ["Patric", "Chucky", "Phil", "Dil"],
		'correctChoice': "Dil",
		flag: 0
	},

	{
		'question': "What was the name of Arnold's secret admirer in 'Hey Arnold'?",
		'choices': ["Helga", "Julia", "Hagen", "Olga"],
		'correctChoice': "Helga",
		flag: 0
	},
	{
		'question': "What is the name CatDog's mouse friend in 'CatDog'?",
		'choices': ["Albert", "Teddy", "Winslow", "Wilbur"],
		'correctChoice': "Winslow",
		flag: 0
	},
	
]



function randomize(category){
	var checkAsked = 0;
	for(var i=0; i<category.length; i++)
	{
		if(category[i].flag == 1)
			checkAsked++;
	}

	if(checkAsked == 10)
	{
		return -1;
	}
	else{
		var r = Math.floor(Math.random() * 10);
		while(category[r].flag == 1)
		{
			r = Math.floor(Math.random() * 10);
		}
		category[r].flag = 1;
		return r;
	}
}

function refresh() {
    window.location.replace("#mainPage");
    $(document).on("pagebeforeshow","#mainPage", function() {
        window.location.reload();
    });
}

var count;
function showCivil() {
    for(var i=0; i<civil.length; i++)
        civil[i].flag = 0;
    $(document).ready(function showCivilQuestions(){
        $('#civilStartPage').hide();
        $('#qa').show();
        count = randomize(civil);
        if (count == -1)
        {
            $('#qa').hide();
            $('#nextStop').hide();
            $('#result').show();
            $('#score2').html(score);
            $('#playAgain').show();
            $('#return').show();
            $('#playAgain').click(function(){
                $('#return').hide();
                $('#result').hide();
                $('#playAgainCivil').hide();
                score=0;
                showCivil();
            });
            $('#return').click( function(){
                window.location.replace("#mainPage");
                $(document).on("pagebeforeshow","#mainPage", function() {
                    window.location.reload();
                });
            });
        }
        var whereToAdd = document.getElementById("qa");
        // Check if already an unordered list is present. If so remove it.
        removeExistingQuestion(whereToAdd, "civil_choices");
    
        var q = document.createElement("h4");
        q.setAttribute('id', 'inquiry');
        var txt = document.createTextNode(civil[count].question);
        q.appendChild(txt);
        whereToAdd.appendChild(q);
        $('#score').html(score);
        $('#score2').html(score);
    
        // Firstly, create an unordered list of items
        var ulist = document.createElement("ul");
        ulist.setAttribute('id','civil_choices');
        // Create each choice of fruit
        for (var i = 0; i < civil[count].choices.length; ++i){
            // create a radio button for each choice
            var choice = document.createElement("input");
            choice.className = 'ch';
            choice.setAttribute('type','radio');
            choice.setAttribute('id','id'+i);
            choice.setAttribute('name','civil');
            choice.setAttribute('value',civil[count].choices[i]);
        
            //Add the choice to the UL element
            ulist.appendChild(choice);
        
            // Create a Label
            var civilLabel = document.createElement("label");
            civilLabel.htmlFor = choice.id;
            civilLabel.appendChild(choice);
            var civilNameTextNode = document.createTextNode(civil[count].choices[i]);
            civilLabel.appendChild(civilNameTextNode);
        
            // Add the UL item to the unordered list
            ulist.appendChild(civilLabel);
            // Add a break element
      //      var brElement = document.createElement("br");
    //        ulist.appendChild(brElement);
        }
        //At this point, the entire unordered list of items is created.
        //Add the unordered list to the div.
        whereToAdd.appendChild(ulist);
        $('#nextStop').show();
        $('#next').click(function(){
            
            if ( $("input").is(':checked'))
            {
                var elements = document.getElementsByName('civil');
                for (var i = 0;i < elements.length; i++)
                    {
                        if (elements[i].checked)
                        {
                            if (elements[i].value == civil[count].correctChoice)
                            {
                                score += 5;
                                break;
                            }
                         else
                            break;
                        }
                    }
                showCivilQuestions();
            }
           
        });
        $('#stop').click(function(){
            $('#qa').hide();
            $('#nextStop').hide();
            $('#result').show();
            $('#score2').html(score);
            $('#playAgain').show();
            $('#return').show();
            $('#playAgain').click(function(){
                $('#return').hide();
                $('#result').hide();
                $('#playAgainCivil').hide();
                score=0;
                showCivil();
            });
                         
            $('#return').click(function(){
                window.location.replace("#mainPage");
                $(document).on("pagebeforeshow","#mainPage", function() {
                    window.location.reload();
                });

            });

        });
           
    });
}



function showWw() {
    for(var i=0; i<ww.length; i++)
        ww[i].flag = 0;
    $(document).ready(function showWwQuestions(){
        $('#wwStartPage').hide();
        $('#qaWw').show();
        count = randomize(ww);
        if (count == -1)
        {
            $('#qaWw').hide();
            $('#nextStopWw').hide();
            $('#resultWw').show();
            $('#score2Ww').html(scoreWw);
            $('#playAgainWw').show();
            $('#returnWw').show();
            $('#playAgainWw').click(function(){
                $('#returnWw').hide();
                $('#resultWw').hide();
                $('#playAgainWw').hide();
                scoreWw=0;
                showWw();
            });
            $('#returnWw').click( function(){
                window.location.replace("#mainPage");
                $(document).on("pagebeforeshow","#mainPage", function() {
                    window.location.reload();
                });
            });
        }
        var whereToAdd = document.getElementById("qaWw");
        // Check if already an unordered list is present. If so remove it.
        removeExistingQuestion(whereToAdd, "ww_choices");
    
        var qWw = document.createElement("h4");
        qWw.setAttribute('id', 'inquiry');
        var txt = document.createTextNode(ww[count].question);
        qWw.appendChild(txt);
        whereToAdd.appendChild(qWw);
        $('#scoreWw').html(scoreWw);
        $('#score2Ww').html(scoreWw);
    
        // Firstly, create an unordered list of items
        var ulist = document.createElement("ul");
        ulist.setAttribute('id','ww_choices');
        // Create each choice
        for (var i = 0; i < ww[count].choices.length; ++i){
            // create a radio button for each choice
            var choice = document.createElement("input");
            choice.className = 'ch';
            choice.setAttribute('type','radio');
            choice.setAttribute('id','id'+i);
            choice.setAttribute('name','ww');
            choice.setAttribute('value',ww[count].choices[i]);
        
            //Add the choice to the UL element
            ulist.appendChild(choice);
        
            // Create a Label
            var wwLabel = document.createElement("label");
            wwLabel.htmlFor = choice.id;
            wwLabel.appendChild(choice);
            var wwNameTextNode = document.createTextNode(ww[count].choices[i]);
            wwLabel.appendChild(wwNameTextNode);
        
            // Add the UL item to the unordered list
            ulist.appendChild(wwLabel);

        }
        //At this point, the entire unordered list of items is created.
        //Add the unordered list to the div.
        whereToAdd.appendChild(ulist);
        $('#nextStopWw').show();
        $('#nextWw').click(function(){
            
            if ( $("input").is(':checked'))
            {
                var elements = document.getElementsByName('ww');
                for (var i = 0;i < elements.length; i++)
                    {
                        if (elements[i].checked)
                        {
                            if (elements[i].value == ww[count].correctChoice)
                            {
                                scoreWw += 5;
                                break;
                            }
                         else
                            break;
                        }
                    }
                showWwQuestions();
            }
           
        });
        $('#stopWw').click(function(){
            $('#qaWw').hide();
            $('#nextStopWw').hide();
            $('#resultWw').show();
            $('#score2Ww').html(scoreWw);
            $('#playAgainWw').show();
            $('#returnWw').show();
            $('#playAgainWw').click(function(){
                $('#returnWw').hide();
                $('#resultWw').hide();
                $('#playAgainWw').hide();
                scoreWw=0;
                showWw();
            });
            $('#returnWw').click(function(){
                window.location.replace("#mainPage");
                $(document).on("pagebeforeshow","#mainPage", function() {
                    window.location.reload();
                });
            });

        });
           
    });
}






function showCartoons() {
    for(var i=0; i<shows.length; i++)
        cartoons[i].flag = 0;
    $(document).ready(function showCartoonsQuestions(){
        $('#cartoonsStartPage').hide();
        $('#qaCartoons').show();
        count = randomize(cartoons);
        if (count == -1)
        {
            $('#qaCartoons').hide();
            $('#nextStopCartoons').hide();
            $('#resultCartoons').show();
            $('#score2Cartoons').html(scoreCartoons);
            $('#playAgainCartoons').show();
            $('#returnCartoons').show();
            $('#playAgainCartoons').click(function(){
                $('#returnCartoons').hide();
                $('#resultCartoons').hide();
                $('#playAgainCartoons').hide();
                scoreCartoons=0;
                showCartoons();
            });
            $('#returnCartoons').click( function(){
                window.location.replace("#mainPage");
                $(document).on("pagebeforeshow","#mainPage", function() {
                    window.location.reload();
                });

            });
        }
        var whereToAdd = document.getElementById("qaCartoons");
        // Check if already an unordered list is present. If so remove it.
        removeExistingQuestion(whereToAdd, "cartoons_choices");
    
        var qCartoons = document.createElement("h4");
        qCartoons.setAttribute('id', 'inquiry');
        var txt = document.createTextNode(cartoons[count].question);
        qCartoons.appendChild(txt);
        whereToAdd.appendChild(qCartoons);
        $('#scoreCartoons').html(scoreCartoons);
        $('#score2Cartoons').html(scoreCartoons);
    
        // Firstly, create an unordered list of items
        var ulist = document.createElement("ul");
        ulist.setAttribute('id','cartoons_choices');
        // Create each choice
        for (var i = 0; i < cartoons[count].choices.length; ++i){
            // create a radio button for each choice
            var choice = document.createElement("input");
            choice.className = 'ch';
            choice.setAttribute('type','radio');
            choice.setAttribute('id','id'+i);
            choice.setAttribute('name','cartoons');
            choice.setAttribute('value',cartoons[count].choices[i]);
        
            //Add the choice to the UL element
            ulist.appendChild(choice);
        
            // Create a Label
            var cartoonsLabel = document.createElement("label");
            cartoonsLabel.htmlFor = choice.id;
            cartoonsLabel.appendChild(choice);
            var cartoonsNameTextNode = document.createTextNode(cartoons[count].choices[i]);
            cartoonsLabel.appendChild(cartoonsNameTextNode);
        
            // Add the UL item to the unordered list
            ulist.appendChild(cartoonsLabel);

        }
        //At this point, the entire unordered list of items is created.
        //Add the unordered list to the div.
        whereToAdd.appendChild(ulist);
        $('#nextStopCartoons').show();
        $('#nextCartoons').click(function(){
            
            if ( $("input").is(':checked'))
            {
                var elements = document.getElementsByName('cartoons');
                for (var i = 0;i < elements.length; i++)
                    {
                        if (elements[i].checked)
                        {
                            if (elements[i].value == cartoons[count].correctChoice)
                            {
                                scoreCartoons += 5;
                                break;
                            }
                         else
                            break;
                        }
                    }
                showCartoonsQuestions();
            }
           
        });
        $('#stopCartoons').click(function(){
            $('#qaCartoons').hide();
            $('#nextStopCartoons').hide();
            $('#resultCartoons').show();
            $('#score2Cartoons').html(scoreShows);
            $('#playAgainCartoons').show();
            $('#returnCartoons').show();
            $('#playAgainCartoons').click(function(){
                $('#returnCartoons').hide();
                $('#resultCartoons').hide();
                $('#playAgainCartoons').hide();
                scoreCartoons=0;
                showCartoons();
            });
            $('#returnCartoons').click(function(){
                window.location.replace("#mainPage");
                $(document).on("pagebeforeshow","#mainPage", function() {
                    window.location.reload();
                });
            });

        });
           
    });
}





function showShows() {
    for(var i=0; i<shows.length; i++)
        shows[i].flag = 0;
    $(document).ready(function showShowsQuestions(){
        $('#showsStartPage').hide();
        $('#qaShows').show();
        count = randomize(shows);
        if (count == -1)
        {
            $('#qaShows').hide();
            $('#nextStopShows').hide();
            $('#resultShows').show();
            $('#score2Shows').html(scoreShows);
            $('#playAgainShows').show();
            $('#returnShows').show();
            $('#playAgainShows').click(function(){
                $('#returnShows').hide();
                $('#resultShows').hide();
                $('#playAgainShows').hide();
                scoreShows=0;
                showShows();
            });
            $('#returnShows').click( function(){
               window.location.replace("#mainPage");
                $(document).on("pagebeforeshow","#mainPage", function() {
                    window.location.reload();
                });

            });
        }
        var whereToAdd = document.getElementById("qaShows");
        // Check if already an unordered list is present. If so remove it.
        removeExistingQuestion(whereToAdd, "shows_choices");
    
        var qShows = document.createElement("h4");
        qShows.setAttribute('id', 'inquiry');
        var txt = document.createTextNode(shows[count].question);
        qShows.appendChild(txt);
        whereToAdd.appendChild(qShows);
        $('#scoreShows').html(scoreShows);
        $('#score2Shows').html(scoreShows);
    
        // Firstly, create an unordered list of items
        var ulist = document.createElement("ul");
        ulist.setAttribute('id','shows_choices');
        // Create each choice
        for (var i = 0; i < shows[count].choices.length; ++i){
            // create a radio button for each choice
            var choice = document.createElement("input");
            choice.className = 'ch';
            choice.setAttribute('type','radio');
            choice.setAttribute('id','id'+i);
            choice.setAttribute('name','shows');
            choice.setAttribute('value',shows[count].choices[i]);
        
            //Add the choice to the UL element
            ulist.appendChild(choice);
        
            // Create a Label
            var showsLabel = document.createElement("label");
            showsLabel.htmlFor = choice.id;
            showsLabel.appendChild(choice);
            var showsNameTextNode = document.createTextNode(shows[count].choices[i]);
            showsLabel.appendChild(showsNameTextNode);
        
            // Add the UL item to the unordered list
            ulist.appendChild(showsLabel);

        }
        //At this point, the entire unordered list of items is created.
        //Add the unordered list to the div.
        whereToAdd.appendChild(ulist);
        $('#nextStopShows').show();
        $('#nextShows').click(function(){
            
            if ( $("input").is(':checked'))
            {
                var elements = document.getElementsByName('shows');
                for (var i = 0;i < elements.length; i++)
                    {
                        if (elements[i].checked)
                        {
                            if (elements[i].value == shows[count].correctChoice)
                            {
                                scoreShows += 5;
                                break;
                            }
                         else
                            break;
                        }
                    }
                showShowsQuestions();
            }
           
        });
        $('#stopShows').click(function(){
            $('#qaShows').hide();
            $('#nextStopShows').hide();
            $('#resultShows').show();
            $('#score2Shows').html(scoreShows);
            $('#playAgainShows').show();
            $('#returnShows').show();
            $('#playAgainShows').click(function(){
                $('#returnShows').hide();
                $('#resultShows').hide();
                $('#playAgainShows').hide();
                scoreShows=0;
                showShows();
            });
            $('#returnShows').click(function(){
               window.location.replace("#mainPage");
                $(document).on("pagebeforeshow","#mainPage", function() {
                    window.location.reload();
                });
            });

        });
           
    });
}




function removeExistingQuestion(parent, nameChoices){
    var elem = document.getElementById(nameChoices);
    var elem2 = document.getElementById("inquiry");
    if (elem != null)
        parent.removeChild(elem);
    if(elem2 != null)
        parent.removeChild(elem2);
}

function registerHandlers(){
	document.getElementById("startCivil").onclick = showCivil;
	document.getElementById("startShows").onclick = showShows;
	document.getElementById("startWw").onclick = showWw;
    document.getElementById("startCartoons").onclick = showCartoons;
    document.getElementById("home").onclick = refresh;
    
}