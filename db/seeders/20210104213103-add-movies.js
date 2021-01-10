'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Movies', [
      {
        title: 'The Greatest Showman',
        description: `Orphaned, penniless, but ambitious and with a mind crammed with imagination and fresh ideas, the American entertainer, Phineas Taylor Barnum, will always be remembered as the man with the gift to blur the line between reality and fiction. Thirsty for innovation and hungry for success, the son of a tailor manages to open a wax museum; however, he soon shifts focus to the unique and the peculiar, introducing extraordinary, never-seen-before live acts on the circus stage. Now, some people call Barnum's rich collection of oddities, an outright freak show; but, when Phineas, obsessed for cheers and respectability, gambles everything on the opera singer, Jenny Lind, to appeal to a high-brow audience, he will lose sight of the most crucial aspect of his life: his family. Will Barnum, the greatest showman, risk it all to be accepted?`,
        releaseDate: '2017-12-20',
        posterPath: 'https://theposterdb.com/api/assets/41421',
        genreId: 10402,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Elf',
        description: `Buddy was a baby in an orphanage who stowed away in Santa's sack and ended up at the North Pole. Later, as an adult human who happened to be raised by elves, Santa allows him to go to New York City to find his birth father, Walter Hobbs. Hobbs, on Santa's naughty list for being a heartless jerk, had no idea that Buddy was even born. Buddy, meanwhile, experiences the delights of New York City (and human culture) as only an elf can. When Walter's relationship with Buddy interferes with his job, he is forced to reevaluate his priorities.`,
        releaseDate: '2003-11-7',
        posterPath: 'https://theposterdb.com/api/assets/36128',
        genreId: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pokémon: The Movie 2000',
        description: `An evil genius in a flying fortress is trying to kidnap the birds of the fire, ice, and lightning islands in hopes of luring the sea power, Lugia, and controlling the world. Ash and his friends, in the process of carrying out an island tradition that requires visiting those three islands, discover the plot and try to stop it. Even the comic villains, Team Rocket, turn good and help out in the end against the threat of world destruction. And Pokemon assemble from all around the world in case they can be of help (but they end up helping only the merchandising).`,
        releaseDate: '2000-7-21',
        posterPath: 'https://theposterdb.com/api/assets/1142',
        genreId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Heathers',
        description: `A regular girl, Veronica, tries to survive the social jungle of high school by sticking with the three most popular girls at school who are all called Heather. As she meets a sociopath named JD, her life spirals into a continuous cycle of hate, unintentional murder and indifference, as she exacts revenge on her enemies, also known as her best friends.`,
        releaseDate: '1989-3-31',
        posterPath: 'https://theposterdb.com/api/assets/25024',
        genreId: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Kill Bill: Vol. 1',
        description: `The lead character, called 'The Bride,' was a member of the Deadly Viper Assassination Squad, led by her lover 'Bill.' Upon realizing she was pregnant with Bill's child, 'The Bride' decided to escape her life as a killer. She fled to Texas, met a young man, who, on the day of their wedding rehearsal was gunned down by an angry and jealous Bill (with the assistance of the Deadly Viper Assassination Squad). Four years later, 'The Bride' wakes from a coma, and discovers her baby is gone. She, then, decides to seek revenge upon the five people who destroyed her life and killed her baby. The saga of Kill Bill Volume I begins.`,
        releaseDate: '2003-10-10',
        posterPath: 'https://theposterdb.com/api/assets/31974',
        genreId: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Iron Man',
        description: `Tony Stark. Genius, billionaire, playboy, philanthropist. Son of legendary inventor and weapons contractor Howard Stark. When Tony Stark is assigned to give a weapons presentation to an Iraqi unit led by Lt. Col. James Rhodes, he's given a ride on enemy lines. That ride ends badly when Stark's Humvee that he's riding in is attacked by enemy combatants. He survives - barely - with a chest full of shrapnel and a car battery attached to his heart. In order to survive he comes up with a way to miniaturize the battery and figures out that the battery can power something else. Thus Iron Man is born. He uses the primitive device to escape from the cave in Iraq. Once back home, he then begins work on perfecting the Iron Man suit. But the man who was put in charge of Stark Industries has plans of his own to take over Tony's technology for other matters.`,
        releaseDate: '2008-5-2',
        posterPath: 'https://theposterdb.com/api/assets/26132',
        genreId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Boyhood',
        description: `Filmed over 12 years with the same cast, Richard Linklater's BOYHOOD is a groundbreaking story of growing up as seen through the eyes of a child named Mason (a breakthrough performance by Ellar Coltrane), who literally grows up on screen before our eyes. Starring Ethan Hawke and Patricia Arquette as Mason's parents and newcomer Lorelei Linklater as his sister Samantha, BOYHOOD charts the rocky terrain of childhood like no other film has before. Snapshots of adolescence from road trips and family dinners to birthdays and graduations and all the moments in between become transcendent, set to a soundtrack spanning the years from Coldplay's Yellow to Arcade Fire's Deep Blue. BOYHOOD is both a nostalgic time capsule of the recent past and an ode to growing up and parenting.`,
        releaseDate: '2014-8-15',
        posterPath: 'https://theposterdb.com/api/assets/31208',
        genreId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '11:14',
        description: `A few incidents that happen at 11:14 p.m. in the town of Middleton are seen from five different perspectives, each of the players who generally works toward self interest, not caring about the consequence to other people, and in the process exacerbating the situations by his or her actions. Jack, in town to meet someone, is a chronic drinker and driver, he still doing so despite having his license temporarily suspended. Teens Mark, Eddie, and Tim are out for a joyride in Mark's van, they generally causing havoc all in the name of having fun, that is until something goes wrong. Frank, out for a walk with his dog, stumbles across something which makes him jump to a conclusion about his daughter, to whom he is both overprotective and overly trusting. Duffy, who works as a clerk at Lloyd's EZZZ Stop convenience store, goes to the store just as it is closing to ask his friend, the clerk on duty, Buzzy, for a favor, which may be difficult for her to grant based on her own needs, and Cheri is trying to get a few hundred dollars for an abortion from the purported "fathers", while in reality, she has another plan in mind. All their actions make for a busy night for the first responders on-duty, including Officer Hannagan, and paramedics Leon and Kevin.`,
        releaseDate: '2004-8-20',
        posterPath: 'https://theposterdb.com/api/assets/47135',
        genreId: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Number 23',
        description: `On his birthday, Walter Sparrow, an amiable dog-catcher, takes a call that leaves him dog bit and late to pick up his wife. She's browsed in a bookstore, finding a blood-red-covered novel, a murder mystery with numerology that loops constantly around the number 23. The story captivates Walter: he dreams it, he notices aspects of his life that can be rendered by "23," he searches for the author, he stays in the hotel (in room 23) where events in the novel took place, and he begins to believe it was no novel. His wife and son try to help him, sometimes in sympathy, sometimes to protect him. Slowly, with danger to himself and to his family, he closes in on the truth.`,
        releaseDate: '2007-2-23',
        posterPath: 'https://theposterdb.com/api/assets/50016',
        genreId: 53,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Scott Pilgrim vs. the World',
        description: `Scott Pilgrim plays in a band which aspires to success. He dates Knives Chau, a high-school girl five years younger, and he hasn't recovered from being dumped by his former girlfriend, now a success with her own band. When Scott falls for Ramona Flowers, he has trouble breaking up with Knives and tries to romance Ramona. As if juggling two women wasn't enough, Ramona comes with baggage: seven ex-lovers, with each of whom Scott must do battle to the death in order to win Ramona.`,
        releaseDate: '2010-8-13',
        posterPath: 'https://theposterdb.com/api/assets/14826',
        genreId: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Forrest Gump',
        description: `Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.`,
        releaseDate: '1994-7-6',
        posterPath: 'https://theposterdb.com/api/assets/51002',
        genreId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Step Brothers',
        description: `Brennan Huff and Dale Doback are both about 40 when Brennan's mom and Dale's dad marry. The sons still live with the parents so they must now share a room. Initial antipathy threatens the household's peace and the parents' relationship. Dad lays down the law: both slackers have a month to find a job. Out of the job search and their love of music comes a pact that leads to friendship but more domestic disarray compounded by the boys' sleepwalking. Hovering nearby are Brennan's successful brother and his lonely wife: the brother wants to help sell his step-father's house, the wife wants Dale's attention, and the newlyweds want to retire and sail the seven seas. Can harmony come from the discord?`,
        releaseDate: '2008-7-25',
        posterPath: 'https://theposterdb.com/api/assets/20381',
        genreId: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'GoodFellas',
        description: `Henry Hill might be a small time gangster, who may have taken part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights a bit higher. His two partners could kill off everyone else involved in the robbery, and slowly start to think about climbing up through the hierarchy of the Mob. Henry, however, might be badly affected by his partners' success, but will he consider stooping low enough to bring about the downfall of Jimmy and Tommy?`,
        releaseDate: '1990-9-21',
        posterPath: 'https://theposterdb.com/api/assets/47503',
        genreId: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Wolf of Wall Street',
        description: `In the early 1990s, Jordan Belfort teamed with his partner Donny Azoff and started brokerage firm Stratford-Oakmont. Their company quickly grows from a staff of 20 to a staff of more than 250 and their status in the trading community and Wall Street grows exponentially. So much that companies file their initial public offerings through them. As their status grows, so do the amount of substances they abuse, and so do their lies. They draw attention like no other, throwing lavish parties for their staff when they hit the jackpot on high trades. That ultimately leads to Belfort featured on the cover of Forbes Magazine, being called "The Wolf Of Wall St.". With the FBI onto Belfort's trading schemes, he devises new ways to cover his tracks and watch his fortune grow. Belfort ultimately comes up with a scheme to stash their cash in a European bank. But with the FBI watching him like a hawk, how long will Belfort and Azoff be able to maintain their elaborate wealth and luxurious lifestyles?`,
        releaseDate: '2013-12-25',
        posterPath: 'https://theposterdb.com/api/assets/39150',
        genreId: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Shrek',
        description: `When a green ogre named Shrek discovers his swamp has been 'swamped' with all sorts of fairytale creatures by the scheming Lord Farquaad, Shrek sets out with a very loud donkey by his side to 'persuade' Farquaad to give Shrek his swamp back. Instead, a deal is made. Farquaad, who wants to become the King, sends Shrek to rescue Princess Fiona, who is awaiting her true love in a tower guarded by a fire-breathing dragon. But once they head back with Fiona, it starts to become apparent that not only does Shrek, an ugly ogre, begin to fall in love with the lovely princess, but Fiona is also hiding a huge secret.`,
        releaseDate: '2001-5-18',
        posterPath: 'https://theposterdb.com/api/assets/6162',
        genreId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '2001: A Space Odyssey',
        description: `"2001" is a story of evolution. Sometime in the distant past, someone or something nudged evolution by placing a monolith on Earth (presumably elsewhere throughout the universe as well). Evolution then enabled humankind to reach the moon's surface, where yet another monolith is found, one that signals the monolith placers that humankind has evolved that far. Now a race begins between computers (HAL) and human (Bowman) to reach the monolith placers. The winner will achieve the next step in evolution, whatever that may be.`,
        releaseDate: '1968-5-12',
        posterPath: 'https://theposterdb.com/api/assets/21636',
        genreId: 878,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A Clockwork Orange',
        description: `Protagonist Alex DeLarge is an "ultraviolent" youth in futuristic Britain. As with all luck, his eventually runs out and he's arrested and convicted of murder. While in prison, Alex learns of an experimental program in which convicts are programmed to detest violence. If he goes through the program, his sentence will be reduced and he will be back on the streets sooner than expected. But Alex's ordeals are far from over once he hits the streets of Britain.`,
        releaseDate: '1972-2-2',
        posterPath: 'https://theposterdb.com/api/assets/24697',
        genreId: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Dallas Buyers Club',
        description: `Dallas 1985. Electrician and sometimes rodeo bull rider Ron Woodroof lives hard, which includes heavy smoking, drinking, drug use (primarily cocaine) and casual sex. He is racist and homophobic. While in the hospital on a work related injury, the doctors discover and inform him that he is HIV+, and that he will most-likely die within thirty days. Ron is initially in angry denial that he would have a disease that only "faggots" have, but upon quick reflection comes to the realization that the diagnosis is probably true. He begins to read whatever research is available about the disease, which at this time seems to be most effectively treated by the drug AZT. AZT, however, is only in the clinical trials stage within the US. Incredulous that he, as a dying man, cannot pay for any drug which may save or at least prolong his life, he goes searching for it by whatever means possible. It eventually leads him to Mexico and a "Dr." Vass, an American physician whose license was revoked in the US because of his AIDS related work against US regulations. Dr. Vass leads Ron to a cocktail of other drugs, some vitamins, he believes are more effective in treating the symptoms, since the virus, as Ron learns, will always be in the system of those who have been exposed to it. Ron begins to smuggle these drugs not approved by the FDA into the US, not only for his own use but for sale to other HIV+ persons. In this venture, he goes into an unlikely partnership with a HIV+ transgender woman named Rayon, who he met in the hospital and who has greater contact with AIDS patients through the gay community. As they try to work both above ground to get the meds to those that need them and underground to avoid detection by especially the FDA, Ron comes up with an idea to circumvent the fact of selling the drugs - which are not considered drugs yet since they are not FDA approved - directly to the HIV+ population, which then should should not be against the law. Richard Barkley and Dr. Sevard, the FDA's lead man on the file and one of Ron's doctors respectively, the latter who sees clinical trials as the only way to determine the efficacy of drugs despite the fact that Ron and others would have probably died already without these drugs, try to stop Ron and Rayon at every turn. Caught in the middle is Dr. Eve Saks, another of Ron's doctors, who understands why policies are in place, but who can sympathize with Ron, Rayon and others - all her patients, directly or indirectly - in their situation.`,
        releaseDate: '2013-11-22',
        posterPath: 'https://theposterdb.com/api/assets/76010',
        genreId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        description: `Paranoid Brigadier General Jack D. Ripper of Burpelson Air Force Base, believing that fluoridation of the American water supply is a Soviet plot to poison the U.S. populace, is able to deploy through a back door mechanism a nuclear attack on the Soviet Union without the knowledge of his superiors, including the Chair of the Joint Chiefs of Staff, General Buck Turgidson, and President Merkin Muffley. Only Ripper knows the code to recall the B-52 bombers and he has shut down communication in and out of Burpelson as a measure to protect this attack. Ripper's executive officer, RAF Group Captain Lionel Mandrake (on exchange from Britain), who is being held at Burpelson by Ripper, believes he knows the recall codes if he can only get a message to the outside world. Meanwhile at the Pentagon War Room, key persons including Muffley, Turgidson and nuclear scientist and adviser, a former Nazi named Dr. Strangelove, are discussing measures to stop the attack or mitigate its blow-up into an all out nuclear war with the Soviets. Against Turgidson's wishes, Muffley brings Soviet Ambassador Alexi de Sadesky into the War Room, and get his boss, Soviet Premier Dimitri Kisov, on the hot line to inform him of what's going on. The Americans in the War Room are dismayed to learn that the Soviets have an as yet unannounced Doomsday Device to detonate if any of their key targets are hit. As Ripper, Mandrake and those in the War Room try and work the situation to their end goal, Major T.J. "King" Kong, one of the B-52 bomber pilots, is working on his own agenda of deploying his bomb where ever he can on enemy soil if he can't make it to his intended target.`,
        releaseDate: '1964-1-29',
        posterPath: 'https://theposterdb.com/api/assets/9901',
        genreId: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Fight Club',
        description: `A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power. When the narrator is exposed to the hidden agenda of Tyler's fight club, he must accept the awful truth that Tyler may not be who he says he is.`,
        releaseDate: '1999-10-15',
        posterPath: 'https://theposterdb.com/api/assets/34059',
        genreId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
