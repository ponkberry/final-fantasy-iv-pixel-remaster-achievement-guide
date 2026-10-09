import type { WalkthroughChapter } from '../types'

// Sourced from "FINAL FANTASY IV | Walkthrough & Achievement Guide" by lylat and collaborators
// (https://steamcommunity.com/sharedfiles/filedetails/?id=2596700264), written for the Pixel
// Remaster. Step text is paraphrased, not copied. Treasure and bestiary checklists for each chapter
// come from treasures.ts and bestiary.ts, referenced per step.
export const walkthrough: WalkthroughChapter[] = [
  {
    id: 'ch01-prologue',
    title: 'Prologue',
    summary: 'Cecil returns to Baron with the Red Wings and is stripped of his command.',
    steps: [
      {
        id: 'ch01-s01',
        text: 'Watch the opening and win the two scripted airship battles. Floating Eyeball and Zu are added to the bestiary automatically.',
        bestiaryNumbers: [3, 37],
      },
      {
        id: 'ch01-s02',
        text: 'In Castle Baron 2F, head south down the stairs. On 1F, go east at the four-way junction and press the button behind the guard to reach three chests.',
        treasureIds: ['c003'],
      },
      {
        id: 'ch01-s03',
        text: "Head back west and upstairs, cross to the other tower, and follow the scenes outside to the large West Tower. Climb to the top and rest in Cecil's bed. Kain joins after the cutscene.",
      },
      {
        id: 'ch01-s04',
        text: 'Leave the castle and enter the town next to it.',
      },
    ],
  },
  {
    id: 'ch02-baron-mist-cave',
    title: 'Town of Baron and Mist Cave',
    summary: 'Loot Baron before heading northwest through the Mist Cave.',
    steps: [
      {
        id: 'ch02-s01',
        text: "Baron has 8 hidden items and 3 chests available right now. Check the pot just east of the entrance, the bottom pot in the Inn's bedroom, and the swords upstairs in the Inn (a secret room with 3 chests).",
        treasureIds: ['h01', 'h02', 'c006'],
      },
      {
        id: 'ch02-s02',
        text: 'Outside, check the pot between the buildings north of the Inn, then follow the river path north to two spots at the pond.',
        treasureIds: ['h03', 'h05'],
      },
      {
        id: 'ch02-s03',
        text: 'In the northeast, push into the tree above the old woman to find a secret path with three more hidden items. That completes all 8 hidden items here. The last 3 chests open later with the Baron Key.',
        treasureIds: ['h06', 'h07', 'h08'],
      },
      {
        id: 'ch02-s04',
        text: 'Head northwest from Baron, over the bridge, to the Mist Cave. Goblins, Helldivers, and Sword Rats roam the overworld here.',
        bestiaryNumbers: [1, 2, 4],
      },
      {
        id: 'ch02-s05',
        text: 'Grab all 4 chests in the Mist Cave, then heal and save before the last set of stairs.',
        treasureIds: ['c007', 'c008', 'c009', 'c010'],
        bestiaryNumbers: [5, 7],
      },
      {
        id: 'ch02-s06',
        text: 'Boss: Mist Dragon. Jump with Kain and attack with Cecil, but do nothing while it is in mist form to avoid its counter.',
        bestiaryNumbers: [191],
      },
    ],
  },
  {
    id: 'ch03-mist-kaipo',
    title: 'Mist and Kaipo',
    summary: 'The ring destroys Mist. Cecil carries the young summoner Rydia to Kaipo.',
    steps: [
      {
        id: 'ch03-s01',
        text: 'Enter Mist and walk east to trigger the scene. The fight against the girl is unwinnable, so just let it play out.',
        achievementIds: ['inflammatory-decisions'],
      },
      {
        id: 'ch03-s02',
        text: 'Head northeast across the desert to Kaipo, the town at the oasis. Sand Worm is a rare desert encounter.',
        bestiaryNumbers: [6, 8, 9],
      },
      {
        id: 'ch03-s03',
        text: 'Baron soldiers attack at the Inn. Kill the General first so he can\'t run away. If he escapes he may not count for the bestiary. Rydia joins afterward.',
        bestiaryNumbers: [20, 21],
        warning: 'Defeat the General before the Baron Soldiers so the General entry registers properly.',
      },
      {
        id: 'ch03-s04',
        text: 'Check the northernmost pot north of the weapon shop for an Ether. Then visit the northeast house to see Rosa and leave town.',
        treasureIds: ['h09'],
      },
      {
        id: 'ch03-s05',
        text: "Optional: level Rydia a bit by using the Rod as an item in battle for free magic damage. Then head north to the Underground Waterway.",
      },
    ],
  },
  {
    id: 'ch04-underground-waterway',
    title: 'Underground Waterway',
    summary: 'Tellah joins to chase his daughter through the waterway beneath the desert.',
    steps: [
      {
        id: 'ch04-s01',
        text: 'South Entrance: grab the two chests straight north, then head west. Talk to the old man on the way and Tellah joins.',
        treasureIds: ['c012', 'c013'],
        bestiaryNumbers: [11, 12, 13, 16, 18],
      },
      {
        id: 'ch04-s02',
        text: 'Climb the narrow waterfall to the east for the Iron Armlet. Then walk through the middle of the wide waterfall to find a hidden chamber with 3 chests.',
        treasureIds: ['c014', 'c017'],
      },
      {
        id: 'ch04-s03',
        text: 'B2: take the west stairs from the water for a Potion, then go south and up the stairs for an Ether. Watch the magic tutorial in the southwest room, then grab the Ice Rod on the upper area to the east. B3: two chests on a side branch where the bridges split. Back on B2, follow the left path to a dead end with a secret passage (Feathered Cap), and pick up the Potion on the path north.',
        treasureIds: ['c018', 'c019', 'c020', 'c022', 'c023', 'c024'],
        bestiaryNumbers: [10, 15, 17],
      },
      {
        id: 'ch04-s04',
        text: 'North Entrance: two chests down the first stairs and two more across the east bridge (including the Shadowblade, great on Cecil). That makes all 18 chests.',
        treasureIds: ['c026', 'c028'],
      },
      {
        id: 'ch04-s05',
        text: 'Toadgre and Alligator appear near the North Entrance. If you miss Alligator here, it is common in the next dungeon.',
        bestiaryNumbers: [14, 19],
      },
    ],
  },
  {
    id: 'ch05-subterranean-lake',
    title: 'Subterranean Lake',
    summary: 'Cross the lake to Damcyan and deal with the creature blocking the waterfall.',
    steps: [
      {
        id: 'ch05-s01',
        text: 'Enter the cave northwest of the waterway exit. On B2, take the south stairs for the Hades Helm and Hades Gloves.',
        treasureIds: ['c030'],
      },
      {
        id: 'ch05-s02',
        text: 'On B1, grab the Hades Armor and Hermes Shoes on the way east. Heal and save before touching the tentacles.',
        treasureIds: ['c032'],
      },
      {
        id: 'ch05-s03',
        text: 'Boss: Octomammoth. Summon Chocobo with Rydia, cast Thunder with Tellah, and attack with Cecil.',
        bestiaryNumbers: [158],
      },
    ],
  },
  {
    id: 'ch06-damcyan-antlion',
    title: 'Damcyan Castle and Antlion Cave',
    summary: 'Damcyan is in ruins. Prince Edward joins and you hunt for the Sand Ruby.',
    steps: [
      {
        id: 'ch06-s01',
        text: 'At Damcyan, go one tile south and walk east around the wall to the jail. Talk to the wounded guard, then hit the switch for 3 chests.',
        treasureIds: ['c035'],
      },
      {
        id: 'ch06-s02',
        text: 'Head down to Jail B1 for 6 chests and 3 pots. If you have been following along, Rookie Treasure Hunter pops around here.',
        treasureIds: ['c041', 'h12'],
        achievementIds: ['rookie-treasure-hunter'],
      },
      {
        id: 'ch06-s03',
        text: 'Grab the Tent in the 2F northeast corner, then go up to 3F for the story scenes. Tellah leaves and Edward joins. You get the Hovercraft.',
        treasureIds: ['c042'],
      },
      {
        id: 'ch06-s04',
        text: 'Hovercraft northeast and over the shallows to the Antlion Cave. It has 13 chests across B1 and B2, including a Lamia\'s Harp behind the B2 door and a save room on the way back up.',
        treasureIds: ['c044', 'c046', 'c047', 'c048', 'c049', 'c050', 'c052', 'c055'],
        bestiaryNumbers: [22, 23, 24, 25, 26],
      },
      {
        id: 'ch06-s05',
        text: "Boss: Antlion. It counters everything, but only for chip damage. Summon Chocobo and attack. You get the Sand Ruby.",
        bestiaryNumbers: [159],
      },
    ],
  },
  {
    id: 'ch07-kaipo-mt-hobs',
    title: 'Kaipo Revisited and Mt. Hobs',
    summary: 'Cure Rosa, then cross Mt. Hobs toward Fabul.',
    steps: [
      {
        id: 'ch07-s01',
        text: 'Take the Hovercraft back to Kaipo and use the Sand Ruby on Rosa. She joins. The Sahagin fight that follows is scripted.',
      },
      {
        id: 'ch07-s02',
        text: 'Head east of the Antlion Cave to Mt. Hobs. Rydia learns Fire at the entrance. The Trail on the west side has 4 chests and a save point.',
        treasureIds: ['c059'],
        bestiaryNumbers: [27, 29, 30, 31, 32],
      },
      {
        id: 'ch07-s03',
        text: 'Grab the Holy Arrow on the Summit, then heal and save.',
        treasureIds: ['c060'],
      },
      {
        id: 'ch07-s04',
        text: 'Boss: Mom Bomb. Summon Chocobo and attack. After it explodes, clear the Bombs and Gray Bombs with multi-target attacks. Yang joins.',
        bestiaryNumbers: [160],
      },
      {
        id: 'ch07-s05',
        text: 'Cockatrice here can drop the Cockatrice summon, but don\'t grind for it now. It is far easier with Sirens later. Leave via the East Entrance and pick up Gatlinger on the way to Fabul.',
        bestiaryNumbers: [28, 33, 34],
        subAchievementIds: [{ achievementId: 'summon-collector', subItemId: 'cockatrice' }],
      },
    ],
  },
  {
    id: 'ch08-fabul',
    title: 'Fabul Castle',
    summary: 'Defend Fabul from the Red Wings, then set sail.',
    steps: [
      {
        id: 'ch08-s01',
        text: 'Restock, then head up to the Throne Room to start the defense of Fabul. It is a series of back-to-back fights.',
        bestiaryNumbers: [35, 36],
        warning: 'Kill each Captain before his Baron Warriors so he can\'t escape. The Captain entry may be missable.',
      },
      {
        id: 'ch08-s02',
        text: 'The final round against the Dragoon is unwinnable. Rosa is taken afterward.',
      },
      {
        id: 'ch08-s03',
        text: 'Throne Room: check the northwest pot, then stand on the button on the east side to open a passage with 3 chests.',
        treasureIds: ['h13', 'c063'],
      },
      {
        id: 'ch08-s04',
        text: 'Talk to the innkeeper and answer Yes. Cecil gets the Deathbringer. Loot the East Tower (3F chest, 2F pot) and the West Tower 1F (1 pot, 3 chests).',
        treasureIds: ['c064', 'h14', 'h15', 'c067'],
      },
      {
        id: 'ch08-s05',
        text: 'Leave the castle and board the ship to the east.',
      },
    ],
  },
  {
    id: 'ch09-mysidia',
    title: 'Mysidia',
    summary: 'Shipwrecked and alone, Cecil goes to Mysidia to atone.',
    steps: [
      {
        id: 'ch09-s01',
        text: 'Walk east to Mysidia. Some NPCs will toad, pig, or poison you; talk to them again to undo it. Buy Hi-Potions if you can afford them.',
      },
      {
        id: 'ch09-s02',
        text: 'Speak to the Elder at the north end. Palom and Porom join.',
      },
      {
        id: 'ch09-s03',
        text: 'East, north through the woods, then east again to a large forest. Enter the Chocobo Forest and search the middle of the dark grass clearing at its center for Gysahl Greens.',
        treasureIds: ['h16'],
      },
      {
        id: 'ch09-s04',
        text: 'Head northeast to Mt. Ordeals.',
      },
    ],
  },
  {
    id: 'ch10-mt-ordeals',
    title: 'Mt. Ordeals',
    summary: 'Climb the mountain and become a Paladin.',
    steps: [
      {
        id: 'ch10-s01',
        text: 'Palom clears the fire. Grab the two Potions on the Entrance, then meet Tellah on the Ridge. He rejoins.',
        treasureIds: ['c068', 'c069'],
        bestiaryNumbers: [38, 39, 40],
      },
      {
        id: 'ch10-s02',
        text: 'Grab both Ethers on the Pass (4 chests total in the dungeon). Lilith is easier to find on the way back down.',
        treasureIds: ['c070', 'c071'],
        bestiaryNumbers: [41],
      },
      {
        id: 'ch10-s03',
        text: 'Boss: Scarmiglione and Skullnants. They are undead, so use Fira and Cura and throw Hi-Potions.',
        bestiaryNumbers: [42, 177],
      },
      {
        id: 'ch10-s04',
        text: 'Heal, save, and cross the bridge. Boss: Scarmiglione (undead form). Hi-Potions deal about 500 each; spam Cura and Fira.',
        bestiaryNumbers: [178],
      },
      {
        id: 'ch10-s05',
        text: 'Touch the tablet in the Hall of Mirrors. Cecil becomes a Paladin. Against the Dark Knight, just Defend every turn until it ends.',
        achievementIds: ['the-lights-chosen'],
      },
      {
        id: 'ch10-s06',
        text: 'Paladin Cecil starts at level 1. Equip him and gain levels on the way out, then return to Mysidia, speak to the Elder, and take the warp in the eastern building to Baron.',
      },
    ],
  },
  {
    id: 'ch11-baron-old-waterway',
    title: 'Baron Revisited: Part I',
    summary: 'Back in Baron to find Yang and the Old Waterway into the castle.',
    steps: [
      {
        id: 'ch11-s01',
        text: 'Go upstairs in the Inn and talk to Yang. Beat the Baron Guards (save MP), then the Monk with strong spells. Yang rejoins and you get the Baron Key.',
        bestiaryNumbers: [45],
      },
      {
        id: 'ch11-s02',
        text: 'Use the Baron Key on the weapon and armor shop door. Push down in the bottom-right corner for a passage to 2 chests.',
        treasureIds: ['c073'],
      },
      {
        id: 'ch11-s03',
        text: 'Open the western building with the key. Stand one tile below the stairs and walk east for the last chest. Baron is now done at 6 of 6 chests and 8 of 8 hidden items.',
        treasureIds: ['c074'],
      },
      {
        id: 'ch11-s04',
        text: 'Take the stairs down into the Old Waterway. B4 has 3 chests to the south. On B3, secret passages south from the water lead to the next chests; the third one starts at the foot of the stairs (push right). B2 has a passage left of the door at the top of the long stairs.',
        treasureIds: ['c077', 'c078', 'c079', 'c080', 'c081'],
        bestiaryNumbers: [43, 44, 46, 47, 48, 49],
      },
      {
        id: 'ch11-s05',
        text: 'Check the right side of the save room on B1 for the Ancient Sword, then head up into the castle.',
        treasureIds: ['c082'],
      },
    ],
  },
  {
    id: 'ch12-castle-baron',
    title: 'Baron Revisited: Part II',
    summary: 'Infiltrate Castle Baron and confront the false king.',
    steps: [
      {
        id: 'ch12-s01',
        text: "You can rest in Cecil's room at the top of the West Tower any time. In the main hall, Baigan \"joins\" and then betrays you.",
      },
      {
        id: 'ch12-s02',
        text: 'Boss: Baigan with Right and Left Arm. He reflects magic, but Quake goes through. Palom wins this in a few turns.',
        bestiaryNumbers: [161, 162, 163],
      },
      {
        id: 'ch12-s03',
        text: 'Go east to the roof and press the button that used to be guarded. The treasury behind it has 6 chests.',
        treasureIds: ['c088'],
      },
      {
        id: 'ch12-s04',
        text: 'Loot the East Tower: 4 chests on 1F, 2 on 2F, a pot and 3 chests on 3F, and a pot on B1.',
        treasureIds: ['c092', 'c094', 'h17', 'c097', 'h18'],
      },
      {
        id: 'ch12-s05',
        text: 'Heal, save, and talk to the King in the Throne Room. Boss: Cagnazzo. Use Thundaga with Tellah and Thundara with Palom.',
        bestiaryNumbers: [179],
        achievementIds: ['overcoming-grief'],
      },
      {
        id: 'ch12-s06',
        text: 'Cid joins and you get the airship Enterprise.',
      },
    ],
  },
  {
    id: 'ch13-airship-exploration',
    title: 'Airship Exploration',
    summary: 'Use the airship to sweep up Chocobo Forests, Mythril, and Mist.',
    steps: [
      {
        id: 'ch13-s01',
        text: 'Visit three Chocobo Forests for Gysahl Greens: southwest of Baron, the island northwest of Kaipo, and the mountain-ringed forest east of Fabul. In each one, search the middle of the dark grass clearing at the center.',
        treasureIds: ['h19', 'h20', 'h21'],
      },
      {
        id: 'ch13-s02',
        text: 'Fly south of Fabul to Mythril. Search the grass for the Mythril Staff, Mythril Knife, and 5000 Gil.',
        treasureIds: ['h22', 'h23', 'h24'],
      },
      {
        id: 'ch13-s03',
        text: 'Land at Mist. Search the secret passage east of the well (2 spots) and the grass by the pond northeast of the Inn.',
        treasureIds: ['h26', 'h27'],
      },
      {
        id: 'ch13-s04',
        text: "Walk into the northwest house's fireplace for a passage with 4 chests, including the Rod of Change at the end.",
        treasureIds: ['c100', 'c101'],
      },
    ],
  },
  {
    id: 'ch14-eblan-castle',
    title: 'Eblan Castle',
    summary: 'An optional early raid on the ruined castle of Eblan.',
    warning: "Eblan's monster-in-a-box chests (especially the Mad Ogres) are very tough this early. Save often, or come back after Troia.",
    steps: [
      {
        id: 'ch14-s01',
        text: 'Land by the ruined castle on the southwest island. Fight Roc Baby, Roc, Mors, Ironback, Black Lizard, and Fiery Hound outside.',
        bestiaryNumbers: [71, 73, 74, 85, 94, 100],
      },
      {
        id: 'ch14-s02',
        text: 'East Tower 1F: north to the wall, then west through a secret passage. On 2F, press the button on the right wall. Grab the pot and 3 chests, but don\'t drop down the hole yet.',
        treasureIds: ['c102', 'h28', 'c105'],
      },
      {
        id: 'ch14-s03',
        text: 'From the right of the third pot, walk east to a secret passage. That chest is a Coeurl x2 + Lamia fight for the Blood Lance. Don\'t attack the Coeurls physically.',
        treasureIds: ['c106'],
        bestiaryNumbers: [91, 98],
      },
      {
        id: 'ch14-s04',
        text: 'Drop through the hole for the Silver Hourglass, then take the underground passage south for 2 Ethers and a Mad Ogre x3 chest (Silver Apple).',
        treasureIds: ['c107', 'c109', 'c110'],
        bestiaryNumbers: [102],
      },
      {
        id: 'ch14-s05',
        text: 'West Tower 1F: two tiles south of the entrance, push east for a Skuldier x4 + Steel Golem chest (Sleep Blade). On 2F, check the pot, then push south between the pots for 2 chests. The Bomb Core is back down on 1F.',
        treasureIds: ['c111', 'h29', 'c113', 'c114'],
        bestiaryNumbers: [75, 107],
      },
      {
        id: 'ch14-s06',
        text: 'Main hall: a secret passage east of the stairs hides a Hi-Potion. The Throne Room has passages on both sides with 5 chests total. That makes 19 chests and 2 hidden items here.',
        treasureIds: ['c115', 'c117', 'c120'],
      },
    ],
  },
  {
    id: 'ch15-troia',
    title: 'Troia',
    summary: 'Gear up for the Magnetic Cavern in the town of Troia.',
    steps: [
      {
        id: 'ch15-s01',
        text: 'Land on the grass south of the waterfall town on the northwest continent. Walk north to a hidden Chocobo Forest by a bridge for Gysahl Greens.',
        treasureIds: ['h30'],
        bestiaryNumbers: [50, 51, 52, 53, 54],
      },
      {
        id: 'ch15-s02',
        text: 'In Troia, buy 2 Great Bows and 2 Fire Arrows. The next dungeon bans metal gear.',
      },
      {
        id: 'ch15-s03',
        text: 'Cross the bridge north, go down to the river, and follow it north to a secret grassy area with a girl. Four hidden items are here.',
        treasureIds: ['h34'],
      },
    ],
  },
  {
    id: 'ch16-troia-castle',
    title: 'Troia Castle',
    summary: 'Learn about the stolen Earth Crystal and get the Twin Harp.',
    steps: [
      {
        id: 'ch16-s01',
        text: 'Enter the castle, go through to the courtyard, then into the south building. Take the middle stairs down for a pot.',
        treasureIds: ['h35'],
      },
      {
        id: 'ch16-s02',
        text: 'Take the right stairs down and step on the center button. Eight chests open.',
        treasureIds: ['c128'],
      },
      {
        id: 'ch16-s03',
        text: 'Visit Edward in the infirmary (west side) to get the Twin Harp.',
      },
      {
        id: 'ch16-s04',
        text: 'Walk north through the woods to the Chocobo Village. Search the bushes in the southeast, then go north to an odd patch of grass and push east into the trees for a secret path with two more spots at its end. Ride the Black Chocobo.',
        treasureIds: ['h36', 'h38'],
      },
    ],
  },
  {
    id: 'ch17-magnetic-cavern',
    title: 'Magnetic Cavern',
    summary: 'Retrieve the Earth Crystal from the Dark Elf.',
    steps: [
      {
        id: 'ch17-s01',
        text: 'Fly the Black Chocobo east along the river to the cave in the mountains. Before going in, swap everyone out of metal gear: Great Bows and Fire Arrows for Cecil and Cid, everyone except Yang in the back row.',
      },
      {
        id: 'ch17-s02',
        text: 'Collect all 10 chests across B1-B4. There are save points on B3 and B4.',
        treasureIds: ['c129', 'c130', 'c131', 'c133', 'c136', 'c137', 'c138'],
        bestiaryNumbers: [55, 56, 58, 59],
      },
      {
        id: 'ch17-s03',
        text: 'Mind Flayer here drops the Mindflayer summon. Save this grind for later with Sirens.',
        bestiaryNumbers: [57],
        subAchievementIds: [{ achievementId: 'summon-collector', subItemId: 'mindflayer' }],
      },
      {
        id: 'ch17-s04',
        text: 'Boss: Dark Elf. The first round is unwinnable. Edward plays the harp, so re-equip your real gear and fight it again. It turns into the Dark Dragon near the end.',
        bestiaryNumbers: [164, 165],
      },
      {
        id: 'ch17-s05',
        text: 'Return the crystal to Troia. Then take the left stairs in the south building and say Yes to the lady behind the bars. B2 holds 18 chests, including 50000 Gil.',
        treasureIds: ['c156'],
      },
    ],
  },
  {
    id: 'ch18-tower-of-zot',
    title: 'Tower of Zot',
    summary: 'Trade the Earth Crystal for Rosa in the floating tower.',
    warning: 'One-visit dungeon. Get all 6 chests and every bestiary entry before beating the Magus Sisters. You can still step on the 1F entry point to leave while the sisters are alive.',
    steps: [
      {
        id: 'ch18-s01',
        text: 'Bestiary here: Purple Bavarois, Puppet, Sorceress, Black Knight, Centaur Knight, Gremlin (more common on 2F), Soldieress, Puppeteer, Ice Lizard, Cold Beast, and Hell Turtle (1F and 2F only).',
        bestiaryNumbers: [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
        warning: 'Every monster here is missable.',
      },
      {
        id: 'ch18-s02',
        text: 'Grab the Flame Mail on 1F and the Fiery Hound chest on 2F (Flame Sword).',
        treasureIds: ['c157', 'c158'],
      },
      {
        id: 'ch18-s03',
        text: 'On 4F, each of the three doors leads to a 5F room with chests: Hell Claw and Flame Shield (west), Gaia Hammer (middle), and Sage\'s Surplice (east).',
        treasureIds: ['c159', 'c160', 'c161', 'c162'],
      },
      {
        id: 'ch18-s04',
        text: 'Save in the bottom room on 5F. Boss: Magus Sisters. Kill Cindy first, since she revives the others.',
        bestiaryNumbers: [166, 167, 168],
      },
      {
        id: 'ch18-s05',
        text: 'After the scenes on 6F, wake Kain. Rosa and Kain join. Boss: Barbariccia. Keep Kain jumping and cure petrification with Esuna.',
        bestiaryNumbers: [180],
        achievementIds: ['reforged-love'],
      },
    ],
  },
  {
    id: 'ch19-agart',
    title: 'Agart',
    summary: 'Use the Magma Rock to open the way to the Underworld.',
    steps: [
      {
        id: 'ch19-s01',
        text: 'Get the Magma Rock in Baron. Fly south to Agart, on the small island between the southern continents.',
      },
      {
        id: 'ch19-s02',
        text: 'Follow the narrow northwest passage to a patch of grass and search its south end for an Antarctic Wind.',
        treasureIds: ['h39'],
      },
      {
        id: 'ch19-s03',
        text: 'Use the Magma Rock on the well, then land on the crater just north of town.',
        achievementIds: ['to-the-depths'],
      },
    ],
  },
  {
    id: 'ch20-dwarven-castle',
    title: 'Dwarven Castle',
    summary: 'Defend the dwarves\' crystal from Golbez and get Rydia back.',
    steps: [
      {
        id: 'ch20-s01',
        text: 'Heal, save, and head north to the Throne Room. Cid leaves. Kill all the Brinas and one Calco for the bestiary, and let the rest merge into Calcobrena for extra EXP.',
        bestiaryNumbers: [169, 170, 171],
      },
      {
        id: 'ch20-s02',
        text: 'Boss: Golbez. Pass turns until the scene plays. Rydia returns, and Bio plus attacks finish him quickly.',
        bestiaryNumbers: [172],
      },
      {
        id: 'ch20-s03',
        text: 'Loot the castle: pot near the Inn, the West Tower (fake-wall maze with 4 chests on 3F), and the East Tower (axe on 1F, pot on 2F, 4 chests on 3F).',
        treasureIds: ['h40', 'h41', 'c166', 'c167', 'h42'],
      },
      {
        id: 'ch20-s04',
        text: 'Grab the 4 chests on East Tower 3F. Veteran Treasure Hunter (50% of chests) pops once you head back down the tower afterward.',
        treasureIds: ['c171'],
        achievementIds: ['veteran-treasure-hunter'],
      },
      {
        id: 'ch20-s05',
        text: 'B1 has 3 Gysahl Greens in pots. On B2, go west to two dwarves, then south and east for 3 Cottages. That makes 12 chests and 6 hidden items in the castle.',
        treasureIds: ['h45', 'c174'],
      },
      {
        id: 'ch20-s06',
        text: 'Leave through the Dwarven Base and follow the path northwest to the Tower of Babel. Goblin Captain, Armadillo, and Magma Tortoise are on the way.',
        bestiaryNumbers: [76, 77, 78],
      },
    ],
  },
  {
    id: 'ch21-babel-underworld',
    title: 'Tower of Babel (Underworld)',
    summary: 'Storm the tower to stop Dr. Lugae and protect the last crystal.',
    warning: 'Treat this as a one-visit dungeon: grab all 16 chests and every bestiary entry before Dr. Lugae.',
    steps: [
      {
        id: 'ch21-s01',
        text: '1F has 3 chests. On 2F, grab the Green Beret, then open the Security Eye chest (Icebrand) in the south room and the Stone Golem chest (Ice Lance) in the northeast room.',
        treasureIds: ['c175', 'c176', 'c177', 'c178', 'c179', 'c180'],
        bestiaryNumbers: [84, 86, 88, 89, 90, 93, 101, 104],
      },
      {
        id: 'ch21-s02',
        text: '3F and 4F: Cat Claw, Hi-Potion, Phoenix Down, Killer Bow, and Antarctic Wind, plus two more Security Eye chests (Ice Armor, Ice Shield).',
        treasureIds: ['c183', 'c185', 'c186', 'c187'],
      },
      {
        id: 'ch21-s03',
        text: "Naga only appears when a Security Eye summons it. Don't kill the Eye before it calls one in.",
        bestiaryNumbers: [87],
        warning: 'Naga is easy to miss - let a Security Eye summon it first.',
      },
      {
        id: 'ch21-s04',
        text: '5F has 2 chests and 7F has a Dry Ether by the save room. That makes all 16.',
        treasureIds: ['c188', 'c189', 'c190'],
      },
      {
        id: 'ch21-s05',
        text: 'Boss: Doctor and Barnabas, then Dr. Lugae. Barnabas-Z only appears if Barnabas dies before the Doctor.',
        bestiaryNumbers: [173, 174, 175, 176],
      },
      {
        id: 'ch21-s06',
        text: "Use Dr. Lugae's Key on the 5F door and beat the three Goblin Captains. After the scenes, walk out of the tower on foot.",
      },
    ],
  },
  {
    id: 'ch22-cave-of-eblan',
    title: 'Cave of Eblan',
    summary: 'Fit the airship with a hook and find the route to the Tower of Babel from above.',
    steps: [
      {
        id: 'ch22-s01',
        text: 'At Castle Baron, talk to the engineer in the backyard to fit the hook. Pick up the Hovercraft by Mt. Hobs and drop it in the Eblan area.',
      },
      {
        id: 'ch22-s02',
        text: 'Hovercraft west over the shallows to the Cave of Eblan. B1 has 3 chests behind fake walls and past the stream. Bloody Bat is new here.',
        treasureIds: ['c193'],
        bestiaryNumbers: [106],
      },
      {
        id: 'ch22-s03',
        text: 'Eblan Settlement (no encounters): leftmost room, check the pot by the entrance and the second pot from the top on the west end.',
        treasureIds: ['h47'],
      },
      {
        id: 'ch22-s04',
        text: 'Path to the Tower: 17 chests, several behind secret passages, plus a Steel Golem x2 chest (Blood Sword) off the save room.',
        treasureIds: ['c195', 'c196', 'c197', 'c198', 'c200', 'c203', 'c204', 'c207', 'c208', 'c209'],
      },
      {
        id: 'ch22-s05',
        text: 'Meet the two NPCs to the north. Edge joins. Then push left against the west wall for the last chest, a Dry Ether.',
        treasureIds: ['c210'],
      },
    ],
  },
  {
    id: 'ch23-babel-second-trip',
    title: 'Tower of Babel: Second Trip',
    summary: 'Edge leads the way into the tower from the surface.',
    warning: 'One-visit dungeon. Get all 8 chests and every missable bestiary entry here (Sorcerer, Ghost Knight, Lamia Matriarch, Grudger, Mythril Golem).',
    steps: [
      {
        id: 'ch23-s01',
        text: 'B1: Unicorn Horn by the entrance and a Silver Hourglass northeast of the door. B2: a Mad Ogre x4 chest (Ogrekiller).',
        treasureIds: ['c211', 'c212', 'c213'],
        bestiaryNumbers: [92, 95, 96, 99],
      },
      {
        id: 'ch23-s02',
        text: "B3: Lilith's Kiss. B4: Ashura. B5: 82000 Gil, past the left bridge.",
        treasureIds: ['c214', 'c215', 'c216'],
      },
      {
        id: 'ch23-s04',
        text: 'The fight against the King and Queen of Eblan is unwinnable. Boss: Rubicante. Spam Shiva while his cape is open; never use fire, and avoid physical attacks (he counters).',
        bestiaryNumbers: [181],
        achievementIds: ['inflamed-anger'],
      },
      {
        id: 'ch23-s05',
        text: 'You fall into a trap on the way to the crystal. Grab the Hi-Potions on Underworld 8F and 6F before you leave. Lamia Matriarch and Mythril Golem appear on these lower floors, and the extremely rare Green Dragon usually shows up on 7F, so take your time here.',
        treasureIds: ['c217', 'c218'],
        bestiaryNumbers: [97, 103, 105],
      },
    ],
  },
  {
    id: 'ch24-tomra',
    title: 'New Airship and Tomra',
    summary: 'Upgrade the Falcon to fly over lava and visit Tomra.',
    steps: [
      {
        id: 'ch24-s01',
        text: "Talk to King Giott in the Dwarven Castle for Luca's Necklace, then visit the hospital on B1. The Falcon can now fly over lava.",
      },
      {
        id: 'ch24-s02',
        text: 'Fly to Tomra in the southwest. Diamond gear and a Gold Hairpin are good upgrades if you have the gil.',
      },
      {
        id: 'ch24-s03',
        text: 'The northwest house has 4 chests and 2 pots.',
        treasureIds: ['h48', 'c222', 'h49'],
      },
    ],
  },
  {
    id: 'ch25-cave-of-summons',
    title: 'Cave of Summons',
    summary: 'A lava cave leading to the realm of the Eidolons.',
    steps: [
      {
        id: 'ch25-s01',
        text: 'Fly northwest over the lava to the small island cave. Cast Float on everyone on every floor, since it wears off between floors.',
        bestiaryNumbers: [80, 113, 114, 115, 116, 117, 118, 119],
      },
      {
        id: 'ch25-s02',
        text: 'Get all 11 chests. The Defender (great for Cecil) is a Warrior x5 chest at the north exit of the B3 secret passage.',
        treasureIds: ['c223', 'c224', 'c225', 'c226', 'c227', 'c228', 'c229', 'c232', 'c233'],
      },
      {
        id: 'ch25-s03',
        text: 'Mini Satanas counter with Confuse, and Summoners can call in other monsters from this cave. Step on the warp pad on B3 to reach the Land of Summons.',
      },
    ],
  },
  {
    id: 'ch26-land-of-summons',
    title: 'Land of Summons',
    summary: 'Challenge the Eidolon Queen and King for Asura and Leviathan.',
    steps: [
      {
        id: 'ch26-s01',
        text: 'Grab the Ether, Bestiary, 5000 Gil, and 6000 Gil chests outside. North of the 6000 Gil chest, step on the shaded tile for a secret room with 4 chests.',
        treasureIds: ['c234', 'c235', 'c236', 'c237', 'c241'],
      },
      {
        id: 'ch26-s02',
        text: 'Take the north warp, step off and straight back on, then walk south to reach the Rat Tail.',
        treasureIds: ['c242'],
      },
      {
        id: 'ch26-s03',
        text: "In town, the northwest house has 2 chests. The library's warp leads to the Throne Room.",
        treasureIds: ['c244'],
      },
      {
        id: 'ch26-s04',
        text: 'Boss: Asura. Cast Reflect on her so her buffs bounce to your party, and keep Curaja going.',
        bestiaryNumbers: [192],
        subAchievementIds: [{ achievementId: 'summon-master', subItemId: 'asura' }],
      },
      {
        id: 'ch26-s05',
        text: 'Boss: Leviathan. He opens with Tidal Wave. Curaja every turn and use Thunder attacks (Blitz with Edge).',
        bestiaryNumbers: [193],
        subAchievementIds: [{ achievementId: 'summon-master', subItemId: 'leviathan' }],
      },
      {
        id: 'ch26-s06',
        text: 'The 2 hidden Grimoires here only show up much later. The walkthrough reminds you in Side Quests: Part II.',
      },
    ],
  },
  {
    id: 'ch27-sylvan-cave',
    title: 'Sylvan Cave',
    summary: '30 chests and the Sylvan Cottage, where Yang is recovering.',
    steps: [
      {
        id: 'ch27-s01',
        text: 'Fly to the cave in the northwest corner of the Underworld. Cast Float on every floor.',
        bestiaryNumbers: [79, 108, 109, 110, 111, 112],
      },
      {
        id: 'ch27-s02',
        text: 'First pass: B1 (2 chests), B3 (3 chests), B2 (4, then 5 more). Drop through the hole below the five chests to reach the warp to the Hidden Chamber.',
        treasureIds: ['c246', 'c249', 'c253', 'c258'],
      },
      {
        id: 'ch27-s03',
        text: 'Hidden Chamber: save, then open the six monster-in-a-box chests one by one for the Red, White, and Blue Fangs, Moonring Blade, Avenger, and Medusa Arrow.',
        treasureIds: ['c261', 'c264'],
      },
      {
        id: 'ch27-s04',
        text: 'Second pass: re-enter and collect the Elven Bow, Cottage and 1000 Gil, the Mage Masher (Tiny Toad x6 + Bog Witch), five chests on B1, and an Elixir on B3. That makes all 30.',
        treasureIds: ['c265', 'c267', 'c268', 'c273', 'c274'],
      },
      {
        id: 'ch27-s05',
        text: 'Follow the B3 path south to the Sylvan Cottage. Talk to Yang and grab the Hell Claw and Cat Claw.',
        treasureIds: ['c276'],
      },
    ],
  },
  {
    id: 'ch28-sealed-cavern',
    title: 'Sealed Cavern',
    summary: 'Unlock the Sealed Cavern with Luca\'s Necklace for the last dark crystal.',
    steps: [
      {
        id: 'ch28-s01',
        text: 'Outside the Sylvan Cave, fight Blood Flower, Chrysalis, and Hell Flapper. On the three-tile peninsula just south, look for Gloomwing, Gorgon, Crawler, and Tarantula. Yellow Dragon only appears by hatching from a Mystery Egg: use a Siren on the southern part of the landmass with the Sylvan Cave and let the egg hatch.',
        bestiaryNumbers: [72, 81, 82, 83, 124, 129, 134],
      },
      {
        id: 'ch28-s02',
        text: "Land at the cave northwest of Tomra and open the door with Luca's Necklace.",
      },
      {
        id: 'ch28-s03',
        text: 'Every door here is a Trap Door fight and great EXP for Seasoned Hero. The cave has 19 chests across B1-B3.',
        treasureIds: ['c277', 'c279', 'c281', 'c282', 'c283', 'c284', 'c287', 'c289', 'c290', 'c292', 'c293', 'c295'],
        bestiaryNumbers: [120, 121, 122, 123, 125, 126],
      },
      {
        id: 'ch28-s04',
        text: 'Take the Dark Crystal on B5. Boss: Demon Wall. Spam Leviathan before it closes in.',
        bestiaryNumbers: [182],
      },
      {
        id: 'ch28-s05',
        text: 'Kain leaves on the way out. Visit the Dwarven Castle throne room so the Falcon can travel between worlds through the northeast crater.',
      },
    ],
  },
  {
    id: 'ch29-side-quests-1',
    title: 'Side Quests: Part I',
    summary: 'Sylph, the Adamantite, and Kokkol\'s Smithy.',
    warning: 'The Sylph sidequest is missable. Finish it before triggering the Lunar Whale scene in Mysidia.',
    steps: [
      {
        id: 'ch29-s01',
        text: "In Fabul, go to 2F, exit south, and climb the West Tower to 3F. Yang's wife gives you the Frying Pan.",
      },
      {
        id: 'ch29-s02',
        text: 'Board the Enterprise near Eblan, carry the Hovercraft to Mythril, and drive southeast to the Adamant Grotto. Trade the Rat Tail for Adamantite.',
      },
      {
        id: 'ch29-s03',
        text: "In the Underworld, visit Kokkol's Smithy in the southeast. Check the 1F pot and the 2F shelf, then give the Adamantite to the sleeping smith.",
        treasureIds: ['h51'],
      },
      {
        id: 'ch29-s04',
        text: 'Return to the Sylvan Cottage (Float on every floor) and use the Frying Pan on Yang. Rydia learns Sylph.',
        subAchievementIds: [{ achievementId: 'summon-master', subItemId: 'sylph' }],
      },
      {
        id: 'ch29-s05',
        text: "Return the Frying Pan to Yang's wife for the Knife, a throwing weapon that always deals 9999.",
      },
    ],
  },
  {
    id: 'ch30-the-moon',
    title: 'The Moon',
    summary: 'Get Excalibur, board the Lunar Whale, and meet FuSoYa.',
    steps: [
      {
        id: 'ch30-s01',
        text: 'Walk north in Mysidia to raise the Lunar Whale. Before boarding, take the Falcon to Kokkol\'s Smithy and pick up Excalibur.',
        achievementIds: ['sword-of-myth'],
      },
      {
        id: 'ch30-s02',
        text: 'Board the Lunar Whale and use the Crystal to fly to the moon.',
        achievementIds: ['to-the-moon'],
      },
      {
        id: 'ch30-s03',
        text: 'Land northwest of the Crystal Palace. You can rest in the cabin below the bridge. In the Western Lunar Path, grab the Eukaryote/Prokaryote chest (Golden Apple) and two more chests near the north exit.',
        treasureIds: ['c296', 'c298'],
        bestiaryNumbers: [127, 128, 130, 131, 132, 133],
      },
      {
        id: 'ch30-s04',
        text: 'Go through the Eastern Lunar Path to the Crystal Palace. FuSoYa joins.',
      },
      {
        id: 'ch30-s05',
        text: 'Dark Grenades here (and Balloons) rarely drop the Bomb summon. Save the grind for the cleanup chapter.',
        subAchievementIds: [{ achievementId: 'summon-collector', subItemId: 'bomb' }],
      },
    ],
  },
  {
    id: 'ch31-cave-of-bahamut',
    title: 'Cave of Bahamut and Hummingway Home',
    summary: 'Prove yourself to Bahamut and stop by the Hummingways.',
    steps: [
      {
        id: 'ch31-s01',
        text: 'Land by the circular ledge on the east side of the moon. The 4 chests in the cave make up the Genji set: Gloves and Shield on B1, Armor and Helm on B2.',
        treasureIds: ['c300', 'c302'],
        bestiaryNumbers: [142, 143, 144, 146, 149],
      },
      {
        id: 'ch31-s02',
        text: 'Each of three wizards turns into a Behemoth. It counters every hit, so use Leviathan, Flare, and attacks with heals every turn.',
        bestiaryNumbers: [153],
      },
      {
        id: 'ch31-s03',
        text: 'Boss: Bahamut. Reflect everyone first. Megaflare at 0 bounces back for 9999.',
        bestiaryNumbers: [195],
        subAchievementIds: [{ achievementId: 'summon-master', subItemId: 'bahamut' }],
      },
      {
        id: 'ch31-s04',
        text: 'Visit the Hummingway Home in the lone cave south of the Crystal Palace. It counts toward Adventurous Wayfarer, and they sell Sirens (3000 Gil) and Gysahl Whistles.',
      },
    ],
  },
  {
    id: 'ch32-giant-of-babel',
    title: 'The Giant of Babel',
    summary: 'Board the Giant and destroy its CPU.',
    warning: 'One-visit dungeon. Get all 8 chests and every bestiary entry before the CPU.',
    steps: [
      {
        id: 'ch32-s01',
        text: 'Bestiary here: Beamer, Centaurion, Mech Soldier, Searcher, Last Arm (from a chest), Giant Soldier, and Mech Dragon. Mech Dragon only spawns in the Stairwell right before the bosses.',
        bestiaryNumbers: [135, 136, 137, 138, 140, 141],
        warning: 'Every monster here is missable.',
      },
      {
        id: 'ch32-s02',
        text: 'Steal Sirens from Searchers with Edge, aiming for a big stack (99 is ideal). They make the rare-drop grinds much faster. You can also buy them at the Hummingway Home.',
      },
      {
        id: 'ch32-s03',
        text: 'Chest of the Giant has 5 chests and the Stomach has 2. The Inner Path has the Last Arm chest (Elixir). There is a save point and shop past it.',
        treasureIds: ['c307', 'c309', 'c310'],
        bestiaryNumbers: [139],
      },
      {
        id: 'ch32-s04',
        text: 'Boss: Elemental Lords. Hit each form\'s weakness: fire on Scarmiglione, lightning on Cagnazzo, and Bahamut/Flare/Holy on Barbariccia and Rubicante.',
        achievementIds: ['rematch'],
      },
      {
        id: 'ch32-s05',
        text: 'Boss: CPU. Destroy the Defense Node, focus the CPU, and leave the Attack Node for last. Killing both nodes makes it revive them. FuSoYa leaves and Kain rejoins.',
        bestiaryNumbers: [183, 184, 185],
      },
    ],
  },
  {
    id: 'ch33-side-quests-2',
    title: 'Side Quests: Part II',
    summary: 'Odin and the last three hidden Grimoires.',
    steps: [
      {
        id: 'ch33-s01',
        text: 'Head back to the Blue Planet. In Castle Baron, go East Tower 1F, then B1, then B2, and approach the throne.',
      },
      {
        id: 'ch33-s02',
        text: 'Boss: Odin. You have about one minute. Use Bahamut, Holy, Jump, and attacks.',
        bestiaryNumbers: [194],
        subAchievementIds: [{ achievementId: 'summon-master', subItemId: 'odin' }],
      },
      {
        id: 'ch33-s03',
        text: 'In the Land of Summons, check the bookshelves in the weapon shop and armor shop for two Grimoires.',
        treasureIds: ['h53'],
      },
      {
        id: 'ch33-s04',
        text: 'In the Sylvan Cottage, check the bookshelf for the last hidden item in the game.',
        treasureIds: ['h54'],
        achievementIds: ['item-detector'],
      },
    ],
  },
  {
    id: 'ch34-lunar-subterrane',
    title: 'Lunar Subterrane: Upper Floors',
    summary: 'The final dungeon, from the Crystal Palace down to B6.',
    steps: [
      {
        id: 'ch34-s01',
        text: 'Step on the Crystal Palace 2F warp tile. Arriving counts as the last new location.',
        achievementIds: ['adventurous-wayfarer'],
      },
      {
        id: 'ch34-s02',
        text: "B1: a secret passage on the east wall leads to a Giant Warrior x2 chest (Black Garb). B2: a Selene Guardian/Dark Sage chest (Sage's Staff).",
        treasureIds: ['c311', 'c312'],
      },
      {
        id: 'ch34-s03',
        text: 'B3: interact with the katana. Boss: White Dragon. It counters with Slow, so keep Haste on everyone.',
        bestiaryNumbers: [188],
        subAchievementIds: [{ achievementId: 'power-unleashed', subItemId: 'murasame' }],
      },
      {
        id: 'ch34-s04',
        text: 'The Dragon equipment set and other chests on B2-B4 are behind secret passages. Directions are listed with each treasure.',
        treasureIds: ['c313', 'c314', 'c315', 'c317', 'c318', 'c319'],
      },
      {
        id: 'ch34-s05',
        text: 'B4-B5: several monster-in-a-box chests (Behemoths and dragons) give the Crystal set and a Stardust Rod. The eastern room on B5 with the Red Fang is the Flan Princess room.',
        treasureIds: ['c321', 'c322', 'c323', 'c324', 'c325', 'c326', 'c327', 'c328', 'c329'],
        bestiaryNumbers: [145, 147, 148, 150, 151, 152],
      },
      {
        id: 'ch34-s06',
        text: 'Optional: use Sirens in the Flan Princess room. The 1/64 Pink Tail drop is needed for Tail of Myth, so most players leave this grind for after the game.',
        bestiaryNumbers: [157],
      },
      {
        id: 'ch34-s07',
        text: 'B6: cross the hidden bridge west for the Golden Apple, then warp up and grab the Behemoth chest (Protect Ring).',
        treasureIds: ['c331', 'c332', 'c333', 'c334'],
      },
      {
        id: 'ch34-s08',
        text: 'Boss: Dark Bahamut, at the sword on the pedestal. Heal after its opening Megaflare, Reflect the party, then spam Bahamut so its counter bounces back.',
        bestiaryNumbers: [190],
        subAchievementIds: [{ achievementId: 'power-unleashed', subItemId: 'ragnarok' }],
      },
    ],
  },
  {
    id: 'ch35-lunar-depths',
    title: 'Lunar Subterrane: The Depths',
    summary: 'Plague, the Lunasaurs, Ogopogo, and Zeromus.',
    steps: [
      {
        id: 'ch35-s01',
        text: 'Back past the hidden bridge, take the east stairs. A Selene Guardian x3 + Dark Sage chest holds the Minerva Bustier.',
        treasureIds: ['c335'],
      },
      {
        id: 'ch35-s02',
        text: 'B7, second room: interact with the spear. Boss: Plague. It Dooms two characters, so burst it down within 10 turns.',
        bestiaryNumbers: [187],
        subAchievementIds: [{ achievementId: 'power-unleashed', subItemId: 'holy-lance' }],
      },
      {
        id: 'ch35-s03',
        text: 'B7, third room: Boss: Lunasaurs x2. Ragnarok and the Holy Lance make this easy. You get two Ribbons.',
        treasureIds: ['c337'],
        bestiaryNumbers: [186],
      },
      {
        id: 'ch35-s04',
        text: 'B8: every encounter plays boss music, and Behemoth is a regular enemy here. Grab the Fuma Shuriken in the far west, then interact with the katana. Boss: Ogopogo. Don\'t use lightning (it counters with Whirl).',
        treasureIds: ['c338'],
        bestiaryNumbers: [154, 189],
        subAchievementIds: [{ achievementId: 'power-unleashed', subItemId: 'masamune' }],
      },
      {
        id: 'ch35-s05',
        text: 'B9 and B10: the last 4 chests in the game. Legendary Treasure Hunter pops after your next battle or area change.',
        treasureIds: ['c340', 'c342'],
        achievementIds: ['legendary-treasure-hunter'],
      },
      {
        id: 'ch35-s06',
        text: "B11: Zemus's Mind (resists physical) and Zemus's Breath (resists magic) appear here.",
        bestiaryNumbers: [155, 156],
      },
      {
        id: 'ch35-s07',
        text: 'B12: after the scripted fights, use the Crystal on Zeromus to reveal his true form. Attack, Jump, Curaja, Bahamut, and have Edge throw his Fuma Shurikens.',
        bestiaryNumbers: [196, 197],
        achievementIds: ['to-the-blue-planet'],
      },
      {
        id: 'ch35-s08',
        text: 'If you got every bestiary entry along the way, Field Research - Professional unlocks once Zeromus is registered.',
        achievementIds: ['field-research-professional'],
      },
    ],
  },
  {
    id: 'ch36-cleanup',
    title: 'Cleanup: Rare Drops and Leveling',
    summary: 'Load your clear save for the secret summons, the Pink Tail, and level 70.',
    steps: [
      {
        id: 'ch36-s01',
        text: 'Goblin summon: farm Goblins on the overworld west of Mt. Hobs. Easy to automate with auto-battle.',
        subAchievementIds: [{ achievementId: 'summon-collector', subItemId: 'goblin' }],
      },
      {
        id: 'ch36-s02',
        text: 'Cockatrice summon: farm Cockatrices on the Mt. Hobs Trail, or use Sirens outside Mysidia to force Cockatrice groups.',
        subAchievementIds: [{ achievementId: 'summon-collector', subItemId: 'cockatrice' }],
      },
      {
        id: 'ch36-s03',
        text: 'Mindflayer summon: use Sirens on Magnetic Cavern B1 or B2 for pairs of Mind Flayers. Reload and retry if a batch of Sirens comes up dry.',
        subAchievementIds: [{ achievementId: 'summon-collector', subItemId: 'mindflayer' }],
      },
      {
        id: 'ch36-s04',
        text: 'Bomb summon: farm Balloons and Dark Grenades in the Western Lunar Path. Rest in the Lunar Whale between runs.',
        subAchievementIds: [{ achievementId: 'summon-collector', subItemId: 'bomb' }],
      },
      {
        id: 'ch36-s05',
        text: 'Use all four summon items from the menu to teach them to Rydia. Summon Collector unlocks then, not when the items drop.',
        achievementIds: ['summon-collector'],
      },
      {
        id: 'ch36-s06',
        text: 'Pink Tail: use Sirens in the eastern B5 room of the Lunar Subterrane to fight five Flan Princesses. Their Dancing berserks your party, so be patient.',
      },
      {
        id: 'ch36-s07',
        text: 'Take the Hovercraft from Mythril to the Adamant Grotto and trade the Pink Tail for the Adamant Armor.',
        achievementIds: ['tail-of-myth'],
      },
      {
        id: 'ch36-s08',
        text: 'Get the final party (Cecil, Kain, Rosa, Rydia, Edge) to level 70. The drop grinds and Trap Doors in the Sealed Cavern usually get you most of the way.',
        achievementIds: ['seasoned-hero'],
      },
      {
        id: 'ch36-s09',
        text: 'Kill-count and gil achievements (Apprentice/Experienced/Legendary Warrior at 100/500/1000 kills; Thrifty Spender, Smart Saver, and Moneybags at 10k/100k/500k gil) come naturally along the way.',
        achievementIds: [
          'apprentice-warrior',
          'experienced-warrior',
          'legendary-warrior',
          'thrifty-spender',
          'smart-saver',
          'moneybags',
        ],
      },
      {
        id: 'ch36-s10',
        text: 'Master of IV unlocks with the last achievement.',
        achievementIds: ['master-of-iv'],
      },
    ],
  },
]
