export const stories = {
  0: {
    role: "NONE",
    text: [
      "image0",
      "It’s a brand new day, 2nd September 1962. A copy of the Sunday Times lies on your coffee table where you had been having breakfast. You can still see its front page from here: YES - WHAT A WIN FOR PREMIER LEE. You feel hope as you get ready for work at the Internal Security Council (ISC); things are starting to look up. Before you leave, you check yourself in the mirror. You are:",
    ],
    options: [
      {
        text: "The Malayan Representative, representing the interests of the Federation of Malaya on behalf of Tunku Abdul Rahman.",
        to: 1,
      },
      {
        text: "The British Representative, representing the interests of Her Majesty’s government as Singapore on behalf of Lord Selkirk, the UK Commissioner in Singapore.",
        to: 5,
      },
      {
        text: "The Singaporean Representative, representing the interests of the Singapore government and its Prime Minister, Lee Kuan Yew.",
        to: 8,
      },
      {
        text: "ISC? What is that?",
        to: 13,
      },
    ],
  },
  1: {
    role: "MY",
    text: [
      "That’s right, you’re the Malayan representative. The Tunku sent you here to make sure that Malaya’s interests would be defended. The past few years have been tumultuous ones;the Malayan Emergency is still fresh in everyone’s minds. You recall that you must pay attention to:",
    ],
    options: [
      {
        text: "The Communists",
        to: 2,
      },
      {
        text: "The British",
        to: 3,
      },
      {
        text: "Singapore",
        to: 4,
      },
    ],
  },
  2: {
    role: "MY",
    text: [
      "Thousands were killed by the communists then; sometimes, like poor Henry Gurney, they were outright assassinated. But between the British forces and your government, you were able to defeat the communists and send them packing. Still, you know they’re out there, hiding in the jungles and waiting for their chance.",
    ],
    options: [
      {
        text: "What about the British?",
        to: 3,
      },
      {
        text: "What about the Singaporeans?",
        to: 4,
      },
      {
        text: "I know enough already, time to move on.",
        to: 15,
      },
    ],
  },
  3: {
    role: "MY",
    text: [
      "Things are different in Singapore. The communists are strong here. They’ve infiltrated all kinds of organisations, especially Singapore’s main opposition party, the Barisan Socialis. Your duty to your country is clear; you must ensure that Singapore doesn’t become a Cuba on your doorstep, a fortress for the communists to regain their strength and restart the fight in Malaya. The merger referendum has gone through, and before Singapore joins Malaya, you need to deal with the communists.",
    ],
    options: [
      {
        text: "What about the Communists?",
        to: 2,
      },
      {
        text: "What about the Singaporeans?",
        to: 4,
      },
      {
        text: "I know enough already, time to move on.",
        to: 15,
      },
    ],
  },
  4: {
    role: "MY",
    text: [
      "There’s just a small problem or two. Singapore’s leader, Lee Kuan Yew, isn’t the most trusted in Malaya. He’s had dealings with the communists before; they were even part of his party, once. And then there were all the disagreements over merger, too. And then there’s the recently appointed British commissioner, Lord Selkirk, who’s so green he could blend into the jungle. He doesn’t seem to realise the communists are a threat, more worried about Britain’s image than people’s lives. But the Tunku trusts you, and you won’t let him down!",
    ],
    options: [
      {
        text: "What about the Communists?",
        to: 2,
      },
      {
        text: "What about the British?",
        to: 3,
      },
      {
        text: "I know enough already, time to move on.",
        to: 15,
      },
    ],
  },
  5: {
    role: "BR",
    text: [
      "That’s right, you’re the British representative. You’re here on the council on Lord Selkirk’s behalf to manage Singapore’s security as it prepares for merger with Malaya. 1962 has been an incredibly hectic year.",
      "The Tunku (Malaya) wants all the communists gone for good through an arrest programme in Singapore before the merger can take place and Lee Kuan Yew (Singapore) just wants it done as soon as possible. You just want to ensure that whatever the outcome, Singapore becomes independent and remains friendly to Britain and that your interests in the region are protected.",
    ],
    options: [
      {
        text: "This seems easy! Just help to launch the operation quickly, purge the communists, and Singapore would have an early merger. All parties would be happy and satisfied, right?",
        to: 6,
      },
    ],
  },
  6: {
    role: "BR",
    text: [
      "Nope! Your superior Selkirk and his deputy Moore don’t seem to think that the communists are a threat and have told you not to go ahead with the arrests. As far as they’re concerned, Lim Chin Siong and his friends do not pose a security concern. The Singaporeans and Malayans claim otherwise, of course, but you’re sceptical. Yes, they killed many in the 1950s, but that was years ago. Today, they’re sticking to the legal, peaceful route. They’re no longer a threat, right?",
    ],
    options: [
      {
        text: "Any other problems that we have to consider?",
        to: 7,
      },
    ],
  },
  7: {
    role: "BR",
    text: [
      "And you also need to protect Britain’s image. The international community doesn’t like colonial powers anymore, and events like the Hola Camp Massacre in Kenya three years back have tarnished Britain’s reputation. You can’t afford another disaster like that. Right next door is Indonesia, already calling you imperialists and the merger a neocolonial project you’re imposing on hapless Malayans and Singaporeans. Your bosses want to avoid doing anything if there’s no pressing need to. Just keep your nose clean and pretty soon whatever happens here won’t be your problem anymore.",
      "You feel an oncoming onslaught of headaches but grit your teeth and press on.",
    ],
    options: [
      {
        text: "Continue",
        to: 14,
      },
    ],
  },
  8: {
    role: "SG",
    text: [
      "That’s right, you’re the Singaporean representative. Lee Kuan Yew has put you on this council to negotiate with the Malayans and British because he trusts you, and if you fail thousands might die, but no pressure! You recall that you are in a difficult spot because of",
    ],
    options: [
      {
        text: "The Communists",
        to: 9,
      },
      {
        text: "The Malayans",
        to: 10,
      },
      {
        text: "The British",
        to: 11,
      },
    ],
  },
  9: {
    role: "SG",
    text: [
      "The communists are powerful; their people have been arrested many times, but they’ve always found a way to rebuild. Trade unions, student groups, political parties...all these and more were infiltrated or controlled by them. Then it was the PAP, now they’ve formed the Barisan Socialis. They’ve been on the backfoot since you won the referendum, but if you’re not careful, they’re coming back. And then woe to anyone who opposed them; their murder squads are deadly and ruthless, unafraid to kill even children. You’ve no doubt if they’re given the chance, they’re coming for you too.",
    ],
    options: [
      {
        text: "What about the Malayans?",
        to: 10,
      },
      {
        text: "What about the British?",
        to: 11,
      },
      {
        text: "I know enough already, time to move on.",
        to: 12,
      },
    ],
  },
  10: {
    role: "SG",
    text: [
      "The Malayans don’t trust you much; there’s a lot of bad blood that’s been built up over the years. But at least they share a common enemy with you in the communists. They’ve suffered just as Singapore has, and perhaps even more, since the communists launched an actual war there.",
    ],
    options: [
      {
        text: "What about the Communists?",
        to: 9,
      },
      {
        text: "What about the British?",
        to: 11,
      },
      {
        text: "I know enough already, time to move on.",
        to: 12,
      },
    ],
  },
  11: {
    role: "SG",
    text: [
      "Then there’s the British, and you just want to sigh. The new guy, Lord Selkirk, has only been here a few years, and the communists kept their heads down during that time. He’s got his head in the clouds, doesn’t seem to recognise how much of a threat these communists are. Frankly, he seems more concerned about maintaining Britain’s image than protecting lives.",
    ],
    options: [
      {
        text: "What about the Communists?",
        to: 9,
      },
      {
        text: "What about the Malayans?",
        to: 10,
      },
      {
        text: "I know enough already, time to move on.",
        to: 12,
      },
    ],
  },
  12: {
    role: "SG",
    text: [
      "You need to get everyone on the council to work together if you’re to defend Singapore. If you fail, the communists will be emboldened, and who knows what devastation they’ll wreak? But Lee believes you’re the right person to see this through, and you won’t let him down!",
    ],
    options: [
      {
        text: "Continue",
        to: 16,
      },
    ],
  },
  13: {
    role: "NONE",
    text: [
      "The ISC was provided for in the 1958 Constitution of Singapore, under which the internal security of Singapore was to be dealt with by a joint council comprising representatives from the Malayan, British, and Singaporean governments. To take any action, all three members had to agree first.",
      "More about the 1958 Constitution of Singapore: The 1958 State of Singapore Constitution or the Singapore (Constitution) Order in Council 1958 laid out the basic government structure for a self-governing Singapore. It replaced the Singapore Colony Order in Council 1955, more popularly known as the Rendel Constitution, which came into force on 8 February 1955. It vested the Singapore government with full internal governing powers, with the exception of matters pertaining to internal security and defence.",
      "→ Find out more at the ISC Exhibit!",
    ],
    options: [
      {
        text: "Continue",
        to: 0,
      },
    ],
  },
  14: {
    role: "BR",
    text: [
      "image1",
      "It’s all over the news. A M Azahari and his compatriots in Brunei have risen up in revolt against the British, possibly with Indonesia’s support. Certainly, the Indonesian communists appear to be very supportive. In Singapore, too, the Special Branch has reported to the council that Azahari met Lim Chin Siong just before revolting. The Barisan Socialis appears ready to come out in support of this armed rebellion. They are calling this a popular uprising against colonialists and calling on the Malayan and Singaporean governments to oppose the British.",
      "Lord Selkirk is furious. The Barisan Socialis have gone beyond the pale, supporting an armed revolt. Worse, Special Branch reports that they may yet have plans to support the revolt in some way. Troops have been sent to put it down, and you doubt the rebels can stand up to British firepower, but you have no idea what the Barisan Socialis intend to do in Singapore. What do you do?",
    ],
    options: [
      {
        text: "Remain calm. You need more information first. Order the Special Branch to increase surveillance on the Barisan Socialis.",
        to: 17,
      },
      {
        text: "The Barisan Socialis have done what?! This is an outrage! There’s no time to get the ISC together to debate; decisive action must be taken now! You unilaterally call for the Special Branch and British soldiers to neutralise the Barisan Socialis immediately.",
        to: 20,
      },
      {
        text: "Let them be. The Barisan Socialis have the right to express their opinions. You order the Special Branch to take no action.",
        to: 23,
      },
    ],
  },
  15: {
    role: "MY",
    text: [
      "image1",
      "It’s all over the news. A M Azahari and his compatriots in Brunei have risen up in revolt against the British, possibly with Indonesia’s support. Certainly, the Indonesian communists appear to be very supportive. In Singapore, too, the Special Branch has reported to the council that Azahari met Lim Chin Siong just before revolting. The Barisan Socialis appears ready to come out in support of this armed rebellion. They are calling this a popular uprising against colonialists and calling on the Malayan and Singaporean governments to oppose the British.",
      "The British are panicking over the revolt. Troops are being sent to put it down, but their confidence has been shaken, especially as the Barisan Socialis came out in support of the revolt. This could be an opportunity to persuade them that the communists are a threat that need to be dealt with pre-emptively. What do you do?",
    ],
    options: [
      {
        text: "Remain calm. The Barisan Socialis are shooting themselves in their feet, and you aren’t about to stop them. Gather more intelligence to pass on to the British and show them that the communists are indeed a security threat.",
        to: 18,
      },
      {
        text: "The Barisan Socialis have done what?! This is your chance - go straight to the council and tell the British to order the arrests, now!",
        to: 21,
      },
      {
        text: "Let them be. You definitely don’t want to be called a colonial stooge. The Brunei Revolt is against the British. Keep quiet and let the Barisan Socialis do what they want to agitate against the British.",
        to: 24,
      },
    ],
  },
  16: {
    role: "SG",
    text: [
      "image1",
      "It’s all over the news. A M Azahari and his compatriots in Brunei have risen up in revolt against the British, possibly with Indonesia’s support. Certainly, the Indonesian communists appear to be very supportive. In Singapore, too, the Special Branch has reported to the council that Azahari met Lim Chin Siong just before revolting. The Barisan Socialis appears ready to come out in support of this armed rebellion. They are calling this a popular uprising against colonialists and calling on the Malayan and Singaporean governments to oppose the British.",
      "The British are panicking over the revolt. Troops are being sent to put it down, but their confidence has been shaken, especially as the Barisan Socialis came out in support of the revolt. This could be an opportunity to persuade them that the communists are a threat that need to be dealt with pre-emptively. What do you do?",
    ],
    options: [
      {
        text: "Remain calm. The Barisan Socialis are shooting themselves in their feet, and you aren’t about to stop them. Gather more intelligence to pass on to the British and show them that the communists are indeed a security threat.",
        to: 19,
      },
      {
        text: "The Barisan Socialis have done what?! This is your chance - go straight to the council and tell the British to order the arrests, now!",
        to: 22,
      },
      {
        text: "Let them be. You definitely don’t want to be called a colonial stooge. The Brunei Revolt is against the British. Keep quiet and let the Barisan Socialis do what they want to agitate against the British.",
        to: 25,
      },
    ],
  },
  17: {
    role: "BR",
    text: [
      "Over the next few days, the Special Branch gathers evidence against the Barisan Socialis. The newspapers are also filled with news about their support for Azahari and the Brunei Revolt.",
      "→ See the evidence, news articles, and more at the Brunei Revolt Exhibit.",
    ],
    options: [
      {
        text: "Continue - Emergency Meeting, 13 December 1962",
        to: 26,
      },
    ],
  },
  18: {
    role: "MY",
    text: [
      "Over the next few days, the Special Branch gathers evidence against the Barisan Socialis. The newspapers are also filled with news about their support for Azahari and the Brunei Revolt.",
      "→ See the evidence, news articles, and more at the Brunei Revolt Exhibit.",
    ],
    options: [
      {
        text: "Continue - Emergency Meeting, 13 December 1962",
        to: 28,
      },
    ],
  },
  19: {
    role: "SG",
    text: [
      "Over the next few days, the Special Branch gathers evidence against the Barisan Socialis. The newspapers are also filled with news about their support for Azahari and the Brunei Revolt.",
      "→ See the evidence, news articles, and more at the Brunei Revolt Exhibit.",
    ],
    options: [
      {
        text: "Continue - Emergency Meeting, 13 December 1962",
        to: 27,
      },
    ],
  },
  20: {
    role: "BR",
    text: [
      "You scramble out of your office, rushing to find Lord Selkirk’s office, but your aide catches you before you reach him.",
      "“Are you trying to get fired?” he hisses at you. “If we do this, it will be easy for the communists to portray Britain as a villain, a tyrannical colonialist and imperialist power trying to retain power at all costs! And the Indonesians will be more than happy to take advantage of the arrests to blast us in the UN too. We can’t afford such a scandal!”",
      "That’s true, you think. You had better go back and rethink what you should do…",
    ],
    options: [
      {
        text: "Go Back",
        to: 14,
      },
    ],
  },
  21: {
    role: "MY",
    text: [
      "You rush to the phone and call your British counterpart, but he doesn't sound very eager to hear you out at all.",
      "“What? Order the arrests? Are you out of your mind? Look, the situation is still developing and things are very busy over here. If you don’t have enough evidence, Lord Selkirk isn’t going to move a finger, understand? We’ve got more important things to do than to arrest people on a whim, like putting down a revolt. Come back when you’ve actually got proper evidence. Good day!”",
      "You slam the phone down in frustration. Looks like you need to gather more intelligence if you want to convince the British.",
    ],
    options: [
      {
        text: "Go Back",
        to: 15,
      },
    ],
  },
  22: {
    role: "SG",
    text: [
      "You rush to the phone and call your British counterpart, but he doesn't sound very eager to hear you out at all.",
      "“What? Order the arrests? Are you out of your mind? Look, the situation is still developing and things are very busy over here. If you don’t have enough evidence, Lord Selkirk isn’t going to move a finger, understand? We’ve got more important things to do than to arrest people on a whim, like putting down a revolt. Come back when you’ve actually got proper evidence. Good day!”",
      "You slam the phone down in frustration. Looks like you need to gather more intelligence if you want to convince the British.",
    ],
    options: [
      {
        text: "Go Back",
        to: 16,
      },
    ],
  },
  23: {
    role: "BR",
    text: [
      "You chose to do nothing, and now you’re paying for it. The revolt was put down, but the Barisan Socialis are growing louder and louder, and the Singaporean government is hard-pressed to contain them and their calls for people to support the Brunei Revolt. Over the next few days, the Special Branch detects increased arms smuggling between Singapore and Brunei. As the people become more and more agitated, crime rises, and the police become increasingly incapable of dealing with the protests, rallies, and riots. Lord Selkirk has lost all confidence in you and orders you to hand in your resignation. You depart Singapore dejectedly, leaving behind an island ready to be set aflame.",
      "Game Over",
    ],
    options: [
      {
        text: "Go Back",
        to: 14,
      },
    ],
  },
  24: {
    role: "MY",
    text: [
      "You chose to do nothing, and now you’re paying for it. The British have lost all trust in you because of your refusal to deal with the Barisan Socialis, suspecting that you are unfriendly to them. Tensions are at an all-time high. Singapore is increasingly beholden to the Barisan Socialis, while the government looks weak and powerless, ready for the communists to take over. If the British do not step in, your government may well have to deal with a communist state on its doorstep sometime soon, and the dark days of the Emergency may return with a vengeance. Perhaps the Tunku will order troops into Singapore to put down the Barisan Socialis first. But whatever happens next is no longer your concern. Because of your failure, the Tunku fired you, and you are returning home in disgrace, leaving behind an island awash with the flames of rebellion.",
      "Game Over",
    ],
    options: [
      {
        text: "Go Back",
        to: 15,
      },
    ],
  },
  25: {
    role: "SG",
    text: [
      "You chose to do nothing, and now you’re paying for it. The British have lost all trust in you because of your refusal to deal with the Barisan Socialis, suspecting that you are unfriendly to them. Tensions are at an all-time high. You aren’t sure if the British will cancel independence and step in to crush the Barisan Socialis, or if they will let the Barisan Socialis take over. Or perhaps the Malayans will invade to crush the communists before they establish themselves.",
      "Either way, it looks like the near future will be filled with plenty of bloodshed as the communists go for broke to seize control of Singapore. But that is no longer your concern. Having failed the Prime Minister, and fearing for your life if the communists should take over, you left Singapore on the first plane to London one morning, going into self-exile.",
      "Game Over",
    ],
    options: [
      {
        text: "Go Back",
        to: 16,
      },
    ],
  },
  26: {
    role: "BR",
    text: [
      "Well, after that emergency meeting on the 13th, the operation was finalised, and everyone is raring to go. Well, almost everyone. Selkirk and Lee are in Kuala Lumpur for the operation, but you’ve just received news that the Tunku has changed his mind; the operation won’t be happening after all. Worse, he’s refused to see the two, and it looks like the Malayans are ready to pull out of the ISC.",
    ],
    options: [
      {
        text: "What's going on?!",
        to: 29,
      },
      {
        text: "Try to persuade the Malayans. They have to see reason, right?",
        to: 32,
      },
      {
        text: "Who needs the Malayans? Press ahead with the operation without them.",
        to: 38,
      },
    ],
  },
  27: {
    role: "SG",
    text: [
      "Well, after that emergency meeting on the 13th, the operation was finalised, and everyone is raring to go. Well, almost everyone. Selkirk and Lee are in Kuala Lumpur for the operation, but you’ve just received news that the Tunku has changed his mind; the operation won’t be happening after all. Worse, he’s refused to see the two, and it looks like the Malayans are ready to pull out of the ISC.",
    ],
    options: [
      {
        text: "What's going on?!",
        to: 30,
      },
      {
        text: "Try to persuade the Malayans. They have to see reason, right?",
        to: 33,
      },
      {
        text: "Who needs the Malayans? Press ahead with the operation without them.",
        to: 39,
      },
    ],
  },
  28: {
    role: "MY",
    text: [
      "It’s finally time for Operation Coldstore to go ahead. But there’s a problem: the Singaporeans insist on arresting two Malayan parliamentarians, and the Tunku, though he had reluctantly agreed at first, has just changed his mind. Moreover, he’s also upset that Singapore wants to include new names in the arrest list. Selkirk and Lee are in Kuala Lumpur to see him, but he’s refused; instead, he wants you to deal with the situation. He’s even suggested pulling out of the ISC.",
    ],
    options: [
      {
        text: "I don’t understand, what’s the problem?",
        to: 31,
      },
      {
        text: "Try to talk to your counterparts. The Tunku’s concerns are valid; surely the British and Singaporeans will understand?",
        to: 40,
      },
      {
        text: "The Tunku is being unreasonable. Try to convince him to support the arrests so that the operation can go ahead on the 16th as planned.",
        to: 42,
      },
    ],
  },
  29: {
    role: "BR",
    text: [
      "Singapore, Malaya and the British are all keen on arresting the communists. But no one could agree on when it should be done and who should do it.",
      "Lee Kuan Yew wants the arrests to be made by the Malaysian government after the merger, when Singapore and Malaya became Malaysia. He wants it to be a Malaysian initiative.",
      "On the other hand, the Tunku wants the PAP leadership to get rid of the communists before the merger and formation of Malaysia. He wants it to be a Singapore initiative.",
      "The British are neither concerned with when nor who should carry out the arrests. But they must remove the communist elements and ensure that a Malaysia friendly to the British is formed.",
      "Singapore and Malaya are having disagreements over the list of names of those who would be arrested. Lee Kuan Yew wants to arrest 2 leaders of the Front Sosialis Malaya, Ahmad Boestamam and Lim Kean Siew but the Tunku is standing firm in refusing.",
      "There’s no way that the Tunku is giving others a chance to think that he is using the arrests to get rid of his political opponents. And there’s always a chance that Lee could shift the blame of arresting his own political opponents onto him. Nope. Not happening on his watch.",
    ],
    options: [
      {
        text: "Continue",
        to: 26,
      },
    ],
  },
  30: {
    role: "SG",
    text: [
      "Singapore, Malaya and the British are all keen on arresting the communists. But no one could agree on when it should be done and who should do it.",
      "Lee Kuan Yew wants the arrests to be made by the Malaysian government after the merger, when Singapore and Malaya became Malaysia. He wants it to be a Malaysian initiative.",
      "On the other hand, the Tunku wants the PAP leadership to get rid of the communists before the merger and formation of Malaysia. He wants it to be a Singapore initiative.",
      "The British are neither concerned with when nor who should carry out the arrests. But they must remove the communist elements and ensure that a Malaysia friendly to the British is formed.",
      "Singapore and Malaya are having disagreements over the list of names of those who would be arrested. Lee Kuan Yew wants to arrest 2 leaders of the Front Sosialis Malaya, Ahmad Boestamam and Lim Kean Siew but the Tunku is standing firm in refusing.",
      "There’s no way that the Tunku is giving others a chance to think that he is using the arrests to get rid of his political opponents. And there’s always a chance that Lee could shift the blame of arresting his own political opponents onto him. Nope. Not happening on his watch.",
    ],
    options: [
      {
        text: "Continue",
        to: 27,
      },
    ],
  },
  31: {
    role: "MY",
    text: [
      "Singapore, Malaya and the British are all keen on arresting the communists. But no one could agree on when it should be done and who should do it.",
      "Lee Kuan Yew wants the arrests to be made by the Malaysian government after the merger, when Singapore and Malaya became Malaysia. He wants it to be a Malaysian initiative.",
      "On the other hand, the Tunku wants the PAP leadership to get rid of the communists before the merger and formation of Malaysia. He wants it to be a Singapore initiative.",
      "The British are neither concerned with when nor who should carry out the arrests. But they must remove the communist elements and ensure that a Malaysia friendly to the British is formed.",
      "Singapore and Malaya are having disagreements over the list of names of those who would be arrested. Lee Kuan Yew wants to arrest 2 leaders of the Front Sosialis Malaya, Ahmad Boestamam and Lim Kean Siew but the Tunku is standing firm in refusing.",
      "There’s no way that the Tunku is giving others a chance to think that he is using the arrests to get rid of his political opponents. And there’s always a chance that Lee could shift the blame of arresting his own political opponents onto him. Nope. Not happening on his watch.",
    ],
    options: [
      {
        text: "Continue",
        to: 28,
      },
    ],
  },
  32: {
    role: "BR",
    text: [
      "You do your best, but the Tunku is completely unwilling to even meet, much less talk. Worse, the longer you’re forced to wait, the angrier the Singaporeans get. Harsh words are exchanged, and the Malayan representative even leaves the ISC entirely! The operation is shuttered, naturally, but things aren’t looking good.",
    ],
    options: [
      {
        text: "We need to put more pressure on the Malayans.",
        to: 34,
      },
      {
        text: "We need to convince the Singaporeans to back down.",
        to: 36,
      },
    ],
  },
  33: {
    role: "SG",
    text: [
      "The Malayans are stubbornly refusing to change their stance. On top of refusing to arrest their own MPs, the Malayans claim you were playing politics by adding more names to the arrest list. Now the Malayans are pulling out of the ISC completely! This is a disaster.",
    ],
    options: [
      {
        text: "Talk to the British; we need to convince the Malayans to come back to the table.",
        to: 35,
      },
      {
        text: "Can’t we just give the Malayans what they want?",
        to: 37,
      },
    ],
  },
  34: {
    role: "BR",
    text: [
      "The Malayans explain that they aren’t against arresting the communists, but they want Singapore to take their share of the responsibility for the arrests and produce an acceptable list of arrestees. In fact, they took the initiative to arrest fifty communists on their side of the border in December. Lee is holidaying in Cameron Highlands now, making communications difficult, but there’s hope that Operation Coldstore can still go ahead.",
      "→ How did the ISC handle the disagreements? Find out more at the British Resolve Exhibit, where you can read their top secret letters yourself!",
    ],
    options: [
      {
        text: "Continue",
        to: 47,
      },
    ],
  },
  35: {
    role: "SG",
    text: [
      "While Lee takes a break in Cameron Highlands - the man’s been under a lot of pressure - you work with the British to persuade the Malayans. It’s not as hard as you feared; with each passing day the Malayans are also growing more afraid of the communists and Indonesia, which has become increasingly hostile. They have arrested some communists on their side, but they do want Singapore to share responsibility for Coldstore, and to revise the list of arrestees. Still, at least they’re willing to talk.",
      "→ How did the ISC handle the disagreements? Find out more at the British Resolve Exhibit, where you can read their top secret letters yourself!",
    ],
    options: [
      {
        text: "Continue",
        to: 45,
      },
    ],
  },
  36: {
    role: "BR",
    text: [
      "The Singaporeans are adamant that Malayan needs to arrest its own MPs as well, since they were also supportive of the Brunei Revolt. It would be hypocritical to only arrest Singaporeans but not Malayans. As for the new names, the three politicians from Ong Eng Guan’s United People’s Party must stay. These men are suspected communists and sympathisers, and two had already been arrested before in 1956. If they’re left untouched, the communists could regroup behind Ong, as he had tried to gain their support before.",
    ],
    options: [
      {
        text: "Talk to the Malayans instead.",
        to: 34,
      },
    ],
  },
  37: {
    role: "SG",
    text: [
      "Lee refuses; if Singapore is willing to arrest all supporters of the Brunei Revolt but Malaya doesn’t, the justification for Operation Coldstore falls apart. Singapore cannot afford to be bullied around like this. As for the new arrests, Ong Eng Guan has tried to court the communists before, and these three members of his party are suspected communists and sympathisers. They’ve been arrested before; you can’t leave them to reorganise the communists and undo the hard work that’s been done.",
    ],
    options: [
      {
        text: "Talk to the Malayans instead.",
        to: 35,
      },
    ],
  },
  38: {
    role: "BR",
    text: [
      "Who needs the Malayans? We cannot concede on this security threat and must push forth with our plans immediately.",
      "We carried on without the Malayans.",
      "But unfortunately, we missed out the opportunity to arrest 50 communists that could have been resolved by the Malayan special branch in December 1962. The communist networks were not targeted and remain active.",
    ],
    options: [
      {
        text: "Continue",
        to: 47,
      },
    ],
  },
  39: {
    role: "SG",
    text: [
      "Who needs the Malayans? We cannot concede on this security threat and must push forth with our plans immediately.",
      "We carried on without the Malayans.",
      "But unfortunately, we missed out the opportunity to arrest 50 communists that could have been resolved by the Malayan special branch in December 1962. The communist networks were not targeted and remain active.",
    ],
    options: [
      {
        text: "Continue",
        to: 45,
      },
    ],
  },
  40: {
    role: "MY",
    text: [
      "You continue to engage your counterparts, even though your superiors officially pull Malaya out of the ISC. The British are desperate to go ahead with Coldstore so that merger can take place, and are very worried about what Indonesia might do as it becomes increasingly hostile. As time goes by and negotiations continue, the Tunku also remains concerned about the communist threat. It’s clear that everyone wants Operation Coldstore, but disagree on the specifics.",
    ],
    options: [
      {
        text: "Keep negotiating.",
        to: 41,
      },
    ],
  },
  41: {
    role: "MY",
    text: [
      "In the end, the Singaporeans agree to take their share of responsibility for Coldstore. Moreover, the arrest list has also been finalised, with three of the Singaporeans’ new names included. These communists and sympathisers from Ong Eng Guan’s party, you accept, are a clear threat and cannot be left untouched if you don’t want to risk the communists making a comeback. So, they’ll be detained too. There’s just one last problem.",
      "→ How did the ISC handle the disagreements? Find out more at the British Resolve Exhibit, where you can read their top secret letters yourself!",
    ],
    options: [
      {
        text: "Continue",
        to: 46,
      },
    ],
  },
  42: {
    role: "MY",
    text: [
      "You try to persuade the Tunku, but he’s adamant that you can’t trust the Singaporeans. According to him, they’re trying to make him take all the blame for Coldstore, while they use it to get rid of their political opponents, communist or not. Operation Coldstore cannot proceed while things stay where they are. Malaya is pulling out of the ISC.",
    ],
    options: [
      {
        text: "But the communists are still a threat...",
        to: 43,
      },
    ],
  },
  43: {
    role: "MY",
    text: [
      "The Tunku agrees with you that the communists are still a threat. In December, fifty of them were arrested in Malaya. And with Indonesia increasingly hostile, the British are ever more desperate to make Coldstore happen and see merger take place. As are you; conflict with Indonesia looms, and you can’t afford to have communists stirring up trouble when that happens.",
    ],
    options: [
      {
        text: "What about Singapore?",
        to: 44,
      },
    ],
  },
  44: {
    role: "MY",
    text: [
      "Singapore too is urging the arrests, and has agreed to share responsibility. Plus, there’s greater agreement on the arrest list now; three politicians from Ong Eng Guan’s party, communists and sympathisers all, will be included to make sure that the communists can’t regroup under them. Coldstore is now set to happen.",
      "→ How did the ISC handle the disagreements? Find out more at the British Resolve Exhibit, where you can read their top secret letters yourself!",
    ],
    options: [
      {
        text: "Continue",
        to: 46,
      },
    ],
  },
  45: {
    role: "SG",
    text: [
      "At last, Operation Coldstore is finalised, but there’s just one small problem:",
      "image2",
      "Lee wants to offer Lim Chin Siong a chance to go into exile. Naturally, your counterparts are wary; the Malayans, in particular, are afraid that Lee will let Lim escape to Indonesia, where he could threaten the new Malaysia. They’ve even threatened to cancel the operation and merger.",
    ],
    options: [
      {
        text: "What’s going on?",
        to: 48,
      },
      {
        text: "Try to come to a compromise.",
        to: 50,
      },
    ],
  },
  46: {
    role: "MY",
    text: [
      "At last, Operation Coldstore is finalised, but there’s just one small problem:",
      "image2",
      "Lee wants to offer Lim Chin Siong a chance to go into exile. Just before the communist threat is to be eliminated, he wants to give one of the most influential ones a chance to escape to Indonesia. Indonesia, which has already declared Konfrontasi. Who knows what harm Lim could do from there?",
    ],
    options: [
      {
        text: "Try to get the Singaporeans to reconsider.",
        to: 52,
      },
    ],
  },
  47: {
    role: "BR",
    text: [
      "At last, Operation Coldstore is finalised, but there’s just one small problem:",
      "image2",
      "Lee wants to offer Lim Chin Siong a chance to go into exile. The Malayans, afraid of what Lim could do if he escapes to Indonesia, which even now has declared Konfrontasi and is threatening Borneo, are threatening to cancel the operation and merger.",
    ],
    options: [
      {
        text: "What’s going on?",
        to: 49,
      },
      {
        text: "Try to arrange a compromise.",
        to: 51,
      },
    ],
  },
  48: {
    role: "SG",
    text: [
      "In a private meeting with Lee, you learn that Lee wants to give Lim this chance since he was an old ally in the anti-colonial fight, even if he is a foe now. He also hopes that treating his enemies well will induce them to treat him likewise, especially with communist murder squads still running around. Besides which, he doubts Lim would actually take the offer and appear to be deserting his communist comrades.",
    ],
    options: [
      {
        text: "Go back",
        to: 45,
      },
    ],
  },
  49: {
    role: "BR",
    text: [
      "You aren’t sure of Lee’s precise motivations, but your superior Philip Moore seems to think that Lee’s afraid. If Lim is detained, he could become a political martyr, a symbol for the opposition to rally around.",
    ],
    options: [
      {
        text: "Go back",
        to: 47,
      },
    ],
  },
  50: {
    role: "SG",
    text: [
      "Thankfully, this proves a relatively minor issue in the end. Lee is willing to compromise with the Malayans. Lim will be arrested first, but be offered a chance to leave the country afterwards. Operation Coldstore can finally take place.",
    ],
    options: [
      {
        text: "Launch Operation Coldstore",
        to: 53,
      },
    ],
  },
  51: {
    role: "BR",
    text: [
      "Thankfully, this proves a relatively minor issue in the end. Lee is willing to compromise with the Malayans. Lim will be arrested first, but be offered a chance to leave the country afterwards. Operation Coldstore can finally take place.",
    ],
    options: [
      {
        text: "Launch Operation Coldstore",
        to: 55,
      },
    ],
  },
  52: {
    role: "MY",
    text: [
      "After issuing some threats - to cancel the operation, to cancel merger - you finally manage to convince the Singaporeans to compromise. Instead of allowing Lim to escape to Indonesia, he will be arrested first, before being offered passage out of the country. It’s time to launch the operation.",
    ],
    options: [
      {
        text: "Launch Operation Coldstore",
        to: 54,
      },
    ],
  },
  53: {
    role: "SG",
    text: [
      "image3",
      "It’s been a long few months, but it’s finally happening. On 2 February 1963, in the wee hours of the morning, police forces that had assembled in Johor entered Singapore and began arresting their targets. By the end of the month, there were 130 detained, including the top communist leaders of the Barisan Socialis and the vast majority of their united front network. Your duty is done, and you can finally take that long-awaited vacation. The Bahamas sound like a good place where you can relax for a few days…",
    ],
    options: [
      {
        text: "Continue",
        to: 56,
      },
    ],
  },
  54: {
    role: "MY",
    text: [
      "image3",
      "It’s been a long few months, but it’s finally happening. On 2 February 1963, in the wee hours of the morning, police forces that had assembled in Johor entered Singapore and began arresting their targets. By the end of the month, there were 130 detained, including the top communist leaders of the Barisan Socialis and the vast majority of their united front network. Your duty is done, and you can finally take that long-awaited vacation. The Bahamas sound like a good place where you can relax for a few days…",
    ],
    options: [
      {
        text: "Continue",
        to: 56,
      },
    ],
  },
  55: {
    role: "BR",
    text: [
      "image3",
      "It’s been a long few months, but it’s finally happening. On 2 February 1963, in the wee hours of the morning, police forces that had assembled in Johor entered Singapore and began arresting their targets. By the end of the month, there were 130 detained, including the top communist leaders of the Barisan Socialis and the vast majority of their united front network. Your duty is done, and you can finally take that long-awaited vacation. The Bahamas sound like a good place where you can relax for a few days…",
    ],
    options: [
      {
        text: "Continue",
        to: 56,
      },
    ],
  },
  56: {
    role: "NONE",
    text: [
      "image4",
      "Operation Coldstore successfully disrupted the communist network in Singapore, paving the way for merger to take place and allowing Singapore to become independent. As Chin Peng, leader of the Communist Party of Malaya later recalled in his memoirs:",
      "“Operation Cold Store shattered our underground network throughout the island. Those who escaped the police net went into hiding. Many fled to Indonesia.” - Chin Peng, Alias Chin Peng, 439.",
    ],
    options: [
      {
        text: "Restart",
        to: -1,
      },
    ],
  },
};
