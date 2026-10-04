import type { TreasureEntry } from '../types'

// Sourced from "FINAL FANTASY IV | Walkthrough & Achievement Guide" by lylat and collaborators
// (https://steamcommunity.com/sharedfiles/filedetails/?id=2596700264), which counts all 342 chests
// and 54 hidden items in walkthrough order. Ids follow that guide's running counter: a chest group's
// id is the counter after opening its last chest (c003 = chests 1-3), a hidden item's id is its own
// number. Hints are paraphrased.
export const treasures: TreasureEntry[] = [
  // Prologue
  { id: 'c003', kind: 'chest', location: 'Castle Baron - 1F', contents: ['480 Gil', 'Ether', 'Tent'], hint: 'East of the four-way junction, press the button behind the guard', chapterId: 'ch01-prologue' },

  // Town of Baron and Mist Cave
  { id: 'h01', kind: 'hidden', location: 'Town of Baron', contents: ['Potion'], hint: 'Pot just east of the entrance', chapterId: 'ch02-baron-mist-cave' },
  { id: 'h02', kind: 'hidden', location: 'Town of Baron - Inn', contents: ['Potion'], hint: 'Bottom pot in the bedroom', chapterId: 'ch02-baron-mist-cave' },
  { id: 'c006', kind: 'chest', location: 'Town of Baron - Inn', contents: ['Dwarven Bread', 'Tent', 'Eye Drops'], hint: 'Northeast stairs, examine the swords to open a secret room', chapterId: 'ch02-baron-mist-cave' },
  { id: 'h03', kind: 'hidden', location: 'Town of Baron', contents: ['Potion'], hint: 'Pot between the buildings north of the Inn', chapterId: 'ch02-baron-mist-cave' },
  { id: 'h05', kind: 'hidden', location: 'Town of Baron', contents: ['Tent', 'Hourglass'], hint: 'Two spots at the pond at the end of the river path', chapterId: 'ch02-baron-mist-cave' },
  { id: 'h06', kind: 'hidden', location: 'Town of Baron', contents: ['Phoenix Down'], hint: 'Secret path behind the tree above the old woman (northeast)', chapterId: 'ch02-baron-mist-cave' },
  { id: 'h07', kind: 'hidden', location: 'Town of Baron', contents: ['Gold Needle'], hint: 'Same secret path, by the path heading up', chapterId: 'ch02-baron-mist-cave' },
  { id: 'h08', kind: 'hidden', location: 'Town of Baron', contents: ['Phoenix Down'], hint: 'Same secret path, south to the wall then all the way west', chapterId: 'ch02-baron-mist-cave' },
  { id: 'c007', kind: 'chest', location: 'Mist Cave', contents: ['Potion'], hint: 'Up some stairs along the first path', chapterId: 'ch02-baron-mist-cave' },
  { id: 'c008', kind: 'chest', location: 'Mist Cave', contents: ['Eye Drops'], hint: 'Up the first stairs after the bridge', chapterId: 'ch02-baron-mist-cave' },
  { id: 'c009', kind: 'chest', location: 'Mist Cave', contents: ['Tent'], hint: 'South through two sets of stairs, on the left', chapterId: 'ch02-baron-mist-cave' },
  { id: 'c010', kind: 'chest', location: 'Mist Cave', contents: ['Potion'], hint: 'Back up one set of stairs, then east', chapterId: 'ch02-baron-mist-cave' },

  // Mist and Kaipo
  { id: 'h09', kind: 'hidden', location: 'Kaipo', contents: ['Ether'], hint: 'Northernmost pot, north of the weapon shop', chapterId: 'ch03-mist-kaipo' },

  // Underground Waterway
  { id: 'c012', kind: 'chest', location: 'Underground Waterway - South Entrance', contents: ['Potion', "Maiden's Kiss"], hint: 'Straight north from the entrance', chapterId: 'ch04-underground-waterway' },
  { id: 'c013', kind: 'chest', location: 'Underground Waterway - South Entrance', contents: ['Tent'], hint: 'Below the first bridge to the west', chapterId: 'ch04-underground-waterway' },
  { id: 'c014', kind: 'chest', location: 'Underground Waterway - South Entrance', contents: ['Iron Armlet'], hint: 'Up the narrow waterfall to the east', chapterId: 'ch04-underground-waterway' },
  { id: 'c017', kind: 'chest', location: 'Underground Waterway - Hidden Chamber', contents: ['X-Potion', 'Dry Ether', 'Phoenix Down'], hint: 'Walk through the middle of the wide waterfall', chapterId: 'ch04-underground-waterway' },
  { id: 'c018', kind: 'chest', location: 'Underground Waterway - B2', contents: ['Potion'], hint: 'West stairs from the water', chapterId: 'ch04-underground-waterway' },
  { id: 'c019', kind: 'chest', location: 'Underground Waterway - B2', contents: ['Ether'], hint: 'South from the water, up the stairs, west side', chapterId: 'ch04-underground-waterway' },
  { id: 'c020', kind: 'chest', location: 'Underground Waterway - B2', contents: ['Ice Rod'], hint: 'East on the upper area after the magic tutorial room', chapterId: 'ch04-underground-waterway' },
  { id: 'c022', kind: 'chest', location: 'Underground Waterway - B3', contents: ['580 Gil', 'Bomb Fragment'], hint: 'First side branch off the bridges', chapterId: 'ch04-underground-waterway' },
  { id: 'c023', kind: 'chest', location: 'Underground Waterway - B2', contents: ['Feathered Cap'], hint: 'Secret passage at the dead end, chest at the very bottom', chapterId: 'ch04-underground-waterway' },
  { id: 'c024', kind: 'chest', location: 'Underground Waterway - B2', contents: ['Potion'], hint: 'On the path north of the entrance', chapterId: 'ch04-underground-waterway' },
  { id: 'c026', kind: 'chest', location: 'Underground Waterway - North Entrance', contents: ['Ether', 'Antarctic Wind'], hint: 'Down the first stairs heading north', chapterId: 'ch04-underground-waterway' },
  { id: 'c028', kind: 'chest', location: 'Underground Waterway - North Entrance', contents: ['Hourglass', 'Shadowblade'], hint: 'Across the bridge east, down the stairs', chapterId: 'ch04-underground-waterway' },

  // Subterranean Lake
  { id: 'c030', kind: 'chest', location: 'Subterranean Lake - B2', contents: ['Hades Helm', 'Hades Gloves'], hint: 'Down the south-facing stairs off the linear path', chapterId: 'ch05-subterranean-lake' },
  { id: 'c032', kind: 'chest', location: 'Subterranean Lake - B1', contents: ['Hades Armor', 'Hermes Shoes'], hint: 'On the path heading east', chapterId: 'ch05-subterranean-lake' },

  // Damcyan Castle and Antlion Cave
  { id: 'c035', kind: 'chest', location: 'Damcyan Castle - Jail', contents: ['Ruby Ring', 'Feathered Cap', 'Crossbow'], hint: 'Hit the wall switch after talking to the wounded guard', chapterId: 'ch06-damcyan-antlion' },
  { id: 'c041', kind: 'chest', location: 'Damcyan Castle - Jail B1', contents: ['Potion', 'Antidote', 'Eye Drops', 'Ether', 'Phoenix Down', 'Gold Needle'], hint: 'Two rows of three', chapterId: 'ch06-damcyan-antlion' },
  { id: 'h12', kind: 'hidden', location: 'Damcyan Castle - Jail B1', contents: ['Elixir', 'Holy Arrow', 'Iron Arrow'], hint: 'Bottom-left, top-right, and bottom-right pots', chapterId: 'ch06-damcyan-antlion' },
  { id: 'c042', kind: 'chest', location: 'Damcyan Castle - 2F', contents: ['Tent'], hint: 'Northeast corner', chapterId: 'ch06-damcyan-antlion' },
  { id: 'c044', kind: 'chest', location: 'Antlion Cave - B1', contents: ["Spider's Silk", 'Potion'], hint: 'Across the west bridge, one under the bridge', chapterId: 'ch06-damcyan-antlion' },
  { id: 'c046', kind: 'chest', location: 'Antlion Cave - B1', contents: ['Tent', 'Potion'], hint: 'South then east of the first chests', chapterId: 'ch06-damcyan-antlion' },
  { id: 'c047', kind: 'chest', location: 'Antlion Cave - B1', contents: ['Potion'], hint: 'East, then north under the bridge', chapterId: 'ch06-damcyan-antlion' },
  { id: 'c048', kind: 'chest', location: 'Antlion Cave - B1', contents: ['Gold Needle'], hint: 'Up the pair of stairs to the east', chapterId: 'ch06-damcyan-antlion' },
  { id: 'c049', kind: 'chest', location: 'Antlion Cave - B2', contents: ['Antarctic Wind'], hint: 'All the way south, next to a door', chapterId: 'ch06-damcyan-antlion' },
  { id: 'c050', kind: 'chest', location: 'Antlion Cave - B2', contents: ["Lamia's Harp"], hint: 'Inside that door', chapterId: 'ch06-damcyan-antlion' },
  { id: 'c052', kind: 'chest', location: 'Antlion Cave - B2', contents: ["Spider's Silk", 'Potion'], hint: 'Northeast and northwest corners', chapterId: 'ch06-damcyan-antlion' },
  { id: 'c055', kind: 'chest', location: 'Antlion Cave - B1', contents: ['Emergency Exit', 'Ether', 'Phoenix Down'], hint: 'Save point room up the stairs from B2', chapterId: 'ch06-damcyan-antlion' },

  // Kaipo Revisited and Mt. Hobs
  { id: 'c059', kind: 'chest', location: 'Mt. Hobs - Trail', contents: ['Tent', 'Potion', 'Gold Needle', '960 Gil'], hint: 'End of the linear path, by a save point', chapterId: 'ch07-kaipo-mt-hobs' },
  { id: 'c060', kind: 'chest', location: 'Mt. Hobs - Summit', contents: ['Holy Arrow'], hint: 'On the path east', chapterId: 'ch07-kaipo-mt-hobs' },

  // Fabul Castle
  { id: 'h13', kind: 'hidden', location: 'Fabul Castle - Throne Room', contents: ['Hermes Shoes'], hint: 'Northwest pot', chapterId: 'ch08-fabul' },
  { id: 'c063', kind: 'chest', location: 'Fabul Castle - Throne Room', contents: ["Spider's Silk", 'Demon Shield', 'Ether'], hint: 'Stand on the button on the east side to open a secret door', chapterId: 'ch08-fabul' },
  { id: 'c064', kind: 'chest', location: 'Fabul Castle - East Tower 3F', contents: ['Tent'], chapterId: 'ch08-fabul' },
  { id: 'h14', kind: 'hidden', location: 'Fabul Castle - East Tower 2F', contents: ["Bacchus's Cider"], hint: 'Bottom-right pot', chapterId: 'ch08-fabul' },
  { id: 'h15', kind: 'hidden', location: 'Fabul Castle - West Tower 1F', contents: ["Zeus's Wrath"], hint: 'Top-left pot', chapterId: 'ch08-fabul' },
  { id: 'c067', kind: 'chest', location: 'Fabul Castle - West Tower 1F', contents: ['Bomb Fragment', 'Antarctic Wind', 'Potion'], chapterId: 'ch08-fabul' },

  // Mysidia
  { id: 'h16', kind: 'hidden', location: 'Chocobo Forest (Mysidia)', contents: ['Gysahl Greens'], chapterId: 'ch09-mysidia' },

  // Mt. Ordeals
  { id: 'c068', kind: 'chest', location: 'Mt. Ordeals - Entrance', contents: ['Potion'], hint: 'Northwest past the stairs', chapterId: 'ch10-mt-ordeals' },
  { id: 'c069', kind: 'chest', location: 'Mt. Ordeals - Entrance', contents: ['Potion'], hint: 'Upstairs, just above the previous one', chapterId: 'ch10-mt-ordeals' },
  { id: 'c070', kind: 'chest', location: 'Mt. Ordeals - Pass', contents: ['Ether'], hint: 'All the way west, up the stairs', chapterId: 'ch10-mt-ordeals' },
  { id: 'c071', kind: 'chest', location: 'Mt. Ordeals - Pass', contents: ['Ether'], hint: 'Below the exit door', chapterId: 'ch10-mt-ordeals' },

  // Baron Revisited: Part I
  { id: 'c073', kind: 'chest', location: 'Town of Baron - Weapon & Armor Shops', contents: ["Zeus's Wrath", '2000 Gil'], hint: 'Use the Baron Key, push down in the bottom-right corner for a secret passage', chapterId: 'ch11-baron-old-waterway' },
  { id: 'c074', kind: 'chest', location: 'Town of Baron - Western Building', contents: ['1000 Gil'], hint: 'Use the Baron Key, stand one tile below the stairs and walk east', chapterId: 'ch11-baron-old-waterway' },
  { id: 'c077', kind: 'chest', location: 'Old Waterway - B4', contents: ['Hi-Potion', 'Ether', "Zeus's Wrath"], hint: 'All the way south from the entrance', chapterId: 'ch11-baron-old-waterway' },
  { id: 'c078', kind: 'chest', location: 'Old Waterway - B3', contents: ['Hourglass'], hint: 'Secret passage south from the water', chapterId: 'ch11-baron-old-waterway' },
  { id: 'c079', kind: 'chest', location: 'Old Waterway - B3', contents: ["Spider's Silk"], hint: 'Next secret passage further south', chapterId: 'ch11-baron-old-waterway' },
  { id: 'c080', kind: 'chest', location: 'Old Waterway - B3', contents: ['Hermes Shoes'], hint: 'Tricky passage at the foot of the stairs, then by the rocks past the first waterfall', chapterId: 'ch11-baron-old-waterway' },
  { id: 'c081', kind: 'chest', location: 'Old Waterway - B2', contents: ['Ether'], hint: 'Secret passage left of the door at the top of the long stairs', chapterId: 'ch11-baron-old-waterway' },
  { id: 'c082', kind: 'chest', location: 'Old Waterway - B1', contents: ['Ancient Sword'], hint: 'Hidden passage on the right side of the save point room', chapterId: 'ch11-baron-old-waterway' },

  // Baron Revisited: Part II
  { id: 'c088', kind: 'chest', location: 'Castle Baron - Treasury', contents: ['Ether', 'Ether', 'Unicorn Horn', 'Unicorn Horn', 'Phoenix Down', 'Phoenix Down'], hint: 'Rooftop east of the Baigan room, press the button', chapterId: 'ch12-castle-baron' },
  { id: 'c092', kind: 'chest', location: 'Castle Baron - East Tower 1F', contents: ["Bacchus's Cider", 'Hermes Shoes', "Bacchus's Cider", 'Hermes Shoes'], hint: 'Leftmost one is reached by going down and back up the stairs', chapterId: 'ch12-castle-baron' },
  { id: 'c094', kind: 'chest', location: 'Castle Baron - East Tower 2F', contents: ['Hi-Potion', 'Hi-Potion'], chapterId: 'ch12-castle-baron' },
  { id: 'h17', kind: 'hidden', location: 'Castle Baron - East Tower 3F', contents: ['Ether'], hint: 'Pot just below the staircase', chapterId: 'ch12-castle-baron' },
  { id: 'c097', kind: 'chest', location: 'Castle Baron - East Tower 3F', contents: ['Ether', 'Tent', 'Tent'], chapterId: 'ch12-castle-baron' },
  { id: 'h18', kind: 'hidden', location: 'Castle Baron - East Tower B1', contents: ['Elixir'], hint: 'Middle pot on the left side', chapterId: 'ch12-castle-baron' },

  // Airship Exploration
  { id: 'h19', kind: 'hidden', location: 'Chocobo Forest (Baron)', contents: ['Gysahl Greens'], hint: 'Southwest of Baron', chapterId: 'ch13-airship-exploration' },
  { id: 'h20', kind: 'hidden', location: 'Chocobo Forest (Southern Island)', contents: ['Gysahl Greens'], hint: 'Island northwest of Kaipo', chapterId: 'ch13-airship-exploration' },
  { id: 'h21', kind: 'hidden', location: 'Chocobo Forest (Fabul)', contents: ['Gysahl Greens'], hint: 'Forest ringed by mountains east of Fabul', chapterId: 'ch13-airship-exploration' },
  { id: 'h22', kind: 'hidden', location: 'Mythril', contents: ['Mythril Staff'], hint: 'Grass by the trees, north then east of the entrance', chapterId: 'ch13-airship-exploration' },
  { id: 'h23', kind: 'hidden', location: 'Mythril', contents: ['Mythril Knife'], hint: 'Grass far north, a little east', chapterId: 'ch13-airship-exploration' },
  { id: 'h24', kind: 'hidden', location: 'Mythril', contents: ['5000 Gil'], hint: 'Grass behind the weapon and armor shops', chapterId: 'ch13-airship-exploration' },
  { id: 'h26', kind: 'hidden', location: 'Mist', contents: ['Bomb Fragment', 'Bomb Fragment'], hint: 'Secret passage east of the well by the armor shop', chapterId: 'ch13-airship-exploration' },
  { id: 'h27', kind: 'hidden', location: 'Mist', contents: ['Bomb Fragment'], hint: 'Grass by the pond northeast of the Inn', chapterId: 'ch13-airship-exploration' },
  { id: 'c100', kind: 'chest', location: 'Mist', contents: ['Gold Hairpin', 'Clothes', 'Ruby Ring'], hint: 'Through the fireplace in the northwest house', chapterId: 'ch13-airship-exploration' },
  { id: 'c101', kind: 'chest', location: 'Mist', contents: ['Rod of Change'], hint: 'End of the same fireplace passage', chapterId: 'ch13-airship-exploration' },

  // Eblan Castle
  { id: 'c102', kind: 'chest', location: 'Eblan Castle - East Tower 1F', contents: ['Coeurl Whisker'], hint: 'North to the wall, then west through a secret passage', chapterId: 'ch14-eblan-castle' },
  { id: 'h28', kind: 'hidden', location: 'Eblan Castle - East Tower 2F', contents: ['Hermes Shoes'], hint: 'Third pot, behind the wall opened by the button', chapterId: 'ch14-eblan-castle' },
  { id: 'c105', kind: 'chest', location: 'Eblan Castle - East Tower 2F', contents: ['Emergency Exit', 'Hi-Potion', 'Hi-Potion'], hint: "Don't step in the hole yet", chapterId: 'ch14-eblan-castle' },
  { id: 'c106', kind: 'chest', location: 'Eblan Castle - East Tower 2F', contents: ['Blood Lance'], hint: 'Secret passage east of the third pot (Coeurl x2, Lamia)', monsterInABox: true, chapterId: 'ch14-eblan-castle' },
  { id: 'c107', kind: 'chest', location: 'Eblan Castle - East Tower 1F', contents: ['Silver Hourglass'], hint: 'Where the hole drops you', chapterId: 'ch14-eblan-castle' },
  { id: 'c109', kind: 'chest', location: 'Eblan Castle - Underground Passage', contents: ['Ether', 'Ether'], hint: 'The two left chests', chapterId: 'ch14-eblan-castle' },
  { id: 'c110', kind: 'chest', location: 'Eblan Castle - Underground Passage', contents: ['Silver Apple'], hint: 'Eastern chest (Mad Ogre x3)', monsterInABox: true, chapterId: 'ch14-eblan-castle' },
  { id: 'c111', kind: 'chest', location: 'Eblan Castle - West Tower 1F', contents: ['Sleep Blade'], hint: 'Two tiles south of the entrance, push east (Skuldier x4, Steel Golem)', monsterInABox: true, chapterId: 'ch14-eblan-castle' },
  { id: 'h29', kind: 'hidden', location: 'Eblan Castle - West Tower 2F', contents: ["Bacchus's Cider"], hint: 'Lower northwest pot', chapterId: 'ch14-eblan-castle' },
  { id: 'c113', kind: 'chest', location: 'Eblan Castle - West Tower 2F', contents: ['Mute Arrow', '10000 Gil'], hint: 'Push south between the south pots', chapterId: 'ch14-eblan-castle' },
  { id: 'c114', kind: 'chest', location: 'Eblan Castle - West Tower 1F', contents: ['Bomb Core'], hint: 'Take the southwest path down from 2F', chapterId: 'ch14-eblan-castle' },
  { id: 'c115', kind: 'chest', location: 'Eblan Castle - 1F', contents: ['Hi-Potion'], hint: 'Secret passage east, just before the stairs', chapterId: 'ch14-eblan-castle' },
  { id: 'c117', kind: 'chest', location: 'Eblan Castle - Throne Room', contents: ['Unicorn Horn', 'Alarm Clock'], hint: 'Left secret passage', chapterId: 'ch14-eblan-castle' },
  { id: 'c120', kind: 'chest', location: 'Eblan Castle - Throne Room', contents: ['Gold Needle', 'Cottage', "Maiden's Kiss"], hint: 'Right secret passage (Cottage is reached from below)', chapterId: 'ch14-eblan-castle' },

  // Troia
  { id: 'h30', kind: 'hidden', location: 'Chocobo Forest (Troia)', contents: ['Gysahl Greens'], hint: 'Hidden forest by a bridge, north of where you land', chapterId: 'ch15-troia' },
  { id: 'h34', kind: 'hidden', location: 'Troia', contents: ['1000 Gil', 'Decoy', 'Ether', 'Dry Ether'], hint: "Secret grassy area up the river's north stairs, four spots", chapterId: 'ch15-troia' },

  // Troia Castle
  { id: 'h35', kind: 'hidden', location: 'Troia Castle - B1', contents: ["Bacchus's Cider"], hint: 'Pot down the middle staircase', chapterId: 'ch16-troia-castle' },
  { id: 'c128', kind: 'chest', location: 'Troia Castle - B1', contents: ['Tent', 'Tent', 'Hi-Potion', 'Hi-Potion', 'Ether', 'Ether', 'Ruby Ring', 'Ruby Ring'], hint: 'Right staircase, step on the center button', chapterId: 'ch16-troia-castle' },
  { id: 'h36', kind: 'hidden', location: 'Chocobo Village', contents: ['Gysahl Greens'], hint: 'Bushes in the southeast', chapterId: 'ch16-troia-castle' },
  { id: 'h38', kind: 'hidden', location: 'Chocobo Village', contents: ['Gysahl Greens', 'Gysahl Greens'], hint: 'Secret path east of the odd grass patch, two spots', chapterId: 'ch16-troia-castle' },

  // Magnetic Cavern and Troia Castle Revisited
  { id: 'c129', kind: 'chest', location: 'Magnetic Cavern - B1', contents: ['Hi-Potion'], hint: 'All the way right past the stairs', chapterId: 'ch17-magnetic-cavern' },
  { id: 'c130', kind: 'chest', location: 'Magnetic Cavern - B1', contents: ['Unicorn Horn'], hint: 'By the stairs down', chapterId: 'ch17-magnetic-cavern' },
  { id: 'c131', kind: 'chest', location: 'Magnetic Cavern - B2', contents: ['Ether'], hint: 'West, north, west', chapterId: 'ch17-magnetic-cavern' },
  { id: 'c133', kind: 'chest', location: 'Magnetic Cavern - B2', contents: ['2000 Gil', 'Ether'], hint: 'Room across the northeast bridge', chapterId: 'ch17-magnetic-cavern' },
  { id: 'c136', kind: 'chest', location: 'Magnetic Cavern - B3', contents: ['Hi-Potion', "Spider's Silk", 'Hourglass'], hint: 'Bottom door south of the bridge', chapterId: 'ch17-magnetic-cavern' },
  { id: 'c137', kind: 'chest', location: 'Magnetic Cavern - B3', contents: ['Fairy Claw'], hint: 'Door north through the rock formation', chapterId: 'ch17-magnetic-cavern' },
  { id: 'c138', kind: 'chest', location: 'Magnetic Cavern - B4', contents: ['Emergency Exit'], hint: 'North past the boss door', chapterId: 'ch17-magnetic-cavern' },
  { id: 'c156', kind: 'chest', location: 'Troia Castle - B2 (Treasury)', contents: ['Hi-Potion', 'Remedy', 'Ether', 'Dry Ether', 'Elixir', 'Echo Herbs', 'Great Bow', 'Fire Arrow', '5000 Gil', 'Hi-Potion', 'Remedy', 'Ether', 'Dry Ether', 'Silver Apple', 'Echo Herbs', 'Ice Arrow', '50000 Gil', 'Thunder Arrow'], hint: 'Opened by the lady behind the bars after the Earth Crystal is returned', chapterId: 'ch17-magnetic-cavern' },

  // Tower of Zot
  { id: 'c157', kind: 'chest', location: 'Tower of Zot - 1F', contents: ['Flame Mail'], hint: 'Top of the northwest path', missable: true, chapterId: 'ch18-tower-of-zot' },
  { id: 'c158', kind: 'chest', location: 'Tower of Zot - 2F', contents: ['Flame Sword'], hint: 'Fiery Hound guards it', monsterInABox: true, missable: true, chapterId: 'ch18-tower-of-zot' },
  { id: 'c159', kind: 'chest', location: 'Tower of Zot - 5F (west room)', contents: ['Hell Claw'], missable: true, chapterId: 'ch18-tower-of-zot' },
  { id: 'c160', kind: 'chest', location: 'Tower of Zot - 5F (west room)', contents: ['Flame Shield'], hint: 'South end of the path', missable: true, chapterId: 'ch18-tower-of-zot' },
  { id: 'c161', kind: 'chest', location: 'Tower of Zot - 5F (middle room)', contents: ['Gaia Hammer'], missable: true, chapterId: 'ch18-tower-of-zot' },
  { id: 'c162', kind: 'chest', location: 'Tower of Zot - 5F (east room)', contents: ["Sage's Surplice"], missable: true, chapterId: 'ch18-tower-of-zot' },

  // Agart
  { id: 'h39', kind: 'hidden', location: 'Agart', contents: ['Antarctic Wind'], hint: 'South end of the grass patch up the narrow northwest passage', chapterId: 'ch19-agart' },

  // Dwarven Castle
  { id: 'h40', kind: 'hidden', location: 'Dwarven Castle - Inn & Item Shop', contents: ['5000 Gil'], hint: 'Pot between the Inn and the counter', chapterId: 'ch20-dwarven-castle' },
  { id: 'h41', kind: 'hidden', location: 'Dwarven Castle - West Tower 2F', contents: ["Bacchus's Cider"], hint: 'Bottom-right pot, through the fake wall', chapterId: 'ch20-dwarven-castle' },
  { id: 'c166', kind: 'chest', location: 'Dwarven Castle - West Tower 3F', contents: ['Hi-Potion', 'Black Belt Gi', 'Ether', 'Elixir'], hint: 'Maze of fake walls, work counter-clockwise', chapterId: 'ch20-dwarven-castle' },
  { id: 'c167', kind: 'chest', location: 'Dwarven Castle - East Tower 1F', contents: ['Dwarven Axe'], hint: 'North of the central stairs', chapterId: 'ch20-dwarven-castle' },
  { id: 'h42', kind: 'hidden', location: 'Dwarven Castle - East Tower 2F', contents: ["Bacchus's Cider"], hint: 'South to the wall, then push west', chapterId: 'ch20-dwarven-castle' },
  { id: 'c171', kind: 'chest', location: 'Dwarven Castle - East Tower 3F', contents: ['Ether', 'Power Armlet', 'Silver Hourglass', 'Elixir'], chapterId: 'ch20-dwarven-castle' },
  { id: 'h45', kind: 'hidden', location: 'Dwarven Castle - B1', contents: ['Gysahl Greens', 'Gysahl Greens', 'Gysahl Greens'], hint: 'Left, middle, and bottom-right pots', chapterId: 'ch20-dwarven-castle' },
  { id: 'c174', kind: 'chest', location: 'Dwarven Castle - B2', contents: ['Cottage', 'Cottage', 'Cottage'], hint: 'West to the two dwarves, then south and east', chapterId: 'ch20-dwarven-castle' },

  // Tower of Babel (Underworld)
  { id: 'c175', kind: 'chest', location: 'Tower of Babel - Underworld 1F', contents: ['Emergency Exit'], hint: 'West at the first split', missable: true, chapterId: 'ch21-babel-underworld' },
  { id: 'c176', kind: 'chest', location: 'Tower of Babel - Underworld 1F', contents: ['Hi-Potion'], hint: 'South of the previous chest', missable: true, chapterId: 'ch21-babel-underworld' },
  { id: 'c177', kind: 'chest', location: 'Tower of Babel - Underworld 1F', contents: ['Ether'], hint: 'Under the arch to the east', missable: true, chapterId: 'ch21-babel-underworld' },
  { id: 'c178', kind: 'chest', location: 'Tower of Babel - Underworld 2F', contents: ['Green Beret'], hint: 'Near the entrance', missable: true, chapterId: 'ch21-babel-underworld' },
  { id: 'c179', kind: 'chest', location: 'Tower of Babel - Underworld 2F', contents: ['Icebrand'], hint: 'Southernmost room (Security Eye)', monsterInABox: true, missable: true, chapterId: 'ch21-babel-underworld' },
  { id: 'c180', kind: 'chest', location: 'Tower of Babel - Underworld 2F', contents: ['Ice Lance'], hint: 'Northeast room (Stone Golem)', monsterInABox: true, missable: true, chapterId: 'ch21-babel-underworld' },
  { id: 'c183', kind: 'chest', location: 'Tower of Babel - Underworld 3F', contents: ['Cat Claw', 'Hi-Potion', 'Phoenix Down'], hint: 'Left of the entrance, east, and bottom of the screen', missable: true, chapterId: 'ch21-babel-underworld' },
  { id: 'c185', kind: 'chest', location: 'Tower of Babel - Underworld 4F', contents: ['Killer Bow', 'Antarctic Wind'], hint: 'Through the first door on 3F', missable: true, chapterId: 'ch21-babel-underworld' },
  { id: 'c186', kind: 'chest', location: 'Tower of Babel - Underworld 4F', contents: ['Ice Armor'], hint: 'East side, first door on the left (Security Eye)', monsterInABox: true, missable: true, chapterId: 'ch21-babel-underworld' },
  { id: 'c187', kind: 'chest', location: 'Tower of Babel - Underworld 4F', contents: ['Ice Shield'], hint: 'Room facing the bridge (Security Eye)', monsterInABox: true, missable: true, chapterId: 'ch21-babel-underworld' },
  { id: 'c188', kind: 'chest', location: 'Tower of Babel - Underworld 5F', contents: ['Arctic Wind'], hint: 'South, then north up a set of stairs', missable: true, chapterId: 'ch21-babel-underworld' },
  { id: 'c189', kind: 'chest', location: 'Tower of Babel - Underworld 5F', contents: ['Hi-Potion'], hint: 'East along the bottom', missable: true, chapterId: 'ch21-babel-underworld' },
  { id: 'c190', kind: 'chest', location: 'Tower of Babel - Underworld 7F', contents: ['Dry Ether'], hint: 'South and west of the save room', missable: true, chapterId: 'ch21-babel-underworld' },

  // Baron Re-Revisited and Cave of Eblan
  { id: 'c193', kind: 'chest', location: 'Cave of Eblan - B1', contents: ['Shuriken', 'Remedy', 'Vampire Fang'], hint: 'Two through fake walls east of the entrance, one far south past the stream', chapterId: 'ch22-cave-of-eblan' },
  { id: 'h47', kind: 'hidden', location: 'Eblan Settlement', contents: ['Potion', 'Potion'], hint: 'Leftmost room: pot by the entrance, second pot from the top on the west end', chapterId: 'ch22-cave-of-eblan' },
  { id: 'c195', kind: 'chest', location: 'Cave of Eblan - Path to the Tower', contents: ['Ether', 'Tent'], hint: 'By the entrance and by the stairs', chapterId: 'ch22-cave-of-eblan' },
  { id: 'c196', kind: 'chest', location: 'Cave of Eblan - Path to the Tower', contents: ['Hi-Potion'], hint: 'Secret passage south of the fallen soldier', chapterId: 'ch22-cave-of-eblan' },
  { id: 'c197', kind: 'chest', location: 'Cave of Eblan - Path to the Tower', contents: ['Bomb Core'], hint: 'Northeast up the small staircase', chapterId: 'ch22-cave-of-eblan' },
  { id: 'c198', kind: 'chest', location: 'Cave of Eblan - Path to the Tower', contents: ['Shuriken'], hint: 'Push right past the three stones', chapterId: 'ch22-cave-of-eblan' },
  { id: 'c200', kind: 'chest', location: 'Cave of Eblan - Path to the Tower', contents: ['Elixir', 'Elixir'], hint: 'Secret passage east, diagonal to the top rock', chapterId: 'ch22-cave-of-eblan' },
  { id: 'c203', kind: 'chest', location: 'Cave of Eblan - Path to the Tower', contents: ['Hi-Potion', 'Cottage', 'Hi-Potion'], hint: 'Back at the entrance area', chapterId: 'ch22-cave-of-eblan' },
  { id: 'c204', kind: 'chest', location: 'Cave of Eblan - Path to the Tower', contents: ["Spider's Silk"], hint: 'South then west', chapterId: 'ch22-cave-of-eblan' },
  { id: 'c207', kind: 'chest', location: 'Cave of Eblan - Path to the Tower', contents: ['Silver Hourglass', 'Phoenix Down', 'Phoenix Down'], hint: 'Three chests packed together to the east', chapterId: 'ch22-cave-of-eblan' },
  { id: 'c208', kind: 'chest', location: 'Cave of Eblan - Path to the Tower', contents: ['Blood Sword'], hint: 'Save point room, push right in the northeast (Steel Golem x2)', monsterInABox: true, chapterId: 'ch22-cave-of-eblan' },
  { id: 'c209', kind: 'chest', location: 'Cave of Eblan - Path to the Tower', contents: ['Gold Needle'], hint: 'West and up the stairs', chapterId: 'ch22-cave-of-eblan' },
  { id: 'c210', kind: 'chest', location: 'Cave of Eblan - Path to the Tower', contents: ['Dry Ether'], hint: 'After Edge joins, push left against the west wall', chapterId: 'ch22-cave-of-eblan' },

  // Tower of Babel: Second Trip
  { id: 'c211', kind: 'chest', location: 'Tower of Babel - B1', contents: ['Unicorn Horn'], hint: 'Right after Edge gets you inside', missable: true, chapterId: 'ch23-babel-second-trip' },
  { id: 'c212', kind: 'chest', location: 'Tower of Babel - B1', contents: ['Silver Hourglass'], hint: 'Northeast of the door', missable: true, chapterId: 'ch23-babel-second-trip' },
  { id: 'c213', kind: 'chest', location: 'Tower of Babel - B2', contents: ['Ogrekiller'], hint: 'South at the split (Mad Ogre x4)', monsterInABox: true, missable: true, chapterId: 'ch23-babel-second-trip' },
  { id: 'c214', kind: 'chest', location: 'Tower of Babel - B3', contents: ["Lilith's Kiss"], hint: 'South, east past the door, north', missable: true, chapterId: 'ch23-babel-second-trip' },
  { id: 'c215', kind: 'chest', location: 'Tower of Babel - B4', contents: ['Ashura'], hint: 'On the linear path east', missable: true, chapterId: 'ch23-babel-second-trip' },
  { id: 'c216', kind: 'chest', location: 'Tower of Babel - B5', contents: ['82000 Gil'], hint: 'Left bridge, far west, then north', missable: true, chapterId: 'ch23-babel-second-trip' },
  { id: 'c217', kind: 'chest', location: 'Tower of Babel - Underworld 8F', contents: ['Hi-Potion'], hint: 'North, after falling through the trap', missable: true, chapterId: 'ch23-babel-second-trip' },
  { id: 'c218', kind: 'chest', location: 'Tower of Babel - Underworld 6F', contents: ['Hi-Potion'], hint: 'South to the bottom, then northeast', missable: true, chapterId: 'ch23-babel-second-trip' },

  // New Airship and Tomra
  { id: 'h48', kind: 'hidden', location: 'Tomra - Northwest House', contents: ['Antarctic Wind'], hint: 'Bottom-left pot', chapterId: 'ch24-tomra' },
  { id: 'c222', kind: 'chest', location: 'Tomra - Northwest House', contents: ['Bomb Fragment', "Zeus's Wrath", 'Dry Ether', '2000 Gil'], chapterId: 'ch24-tomra' },
  { id: 'h49', kind: 'hidden', location: 'Tomra - Northwest House', contents: ['Bestiary'], hint: 'The other pot in the house', chapterId: 'ch24-tomra' },

  // Cave of Summons
  { id: 'c223', kind: 'chest', location: 'Cave of Summons - B1', contents: ['Phoenix Down'], hint: 'Northeast corner (cast Float first)', chapterId: 'ch25-cave-of-summons' },
  { id: 'c224', kind: 'chest', location: 'Cave of Summons - B1', contents: ['Ether'], hint: 'Push left just west of the first chest', chapterId: 'ch25-cave-of-summons' },
  { id: 'c225', kind: 'chest', location: 'Cave of Summons - B1', contents: ['Hi-Potion'], hint: 'South of the first chest', chapterId: 'ch25-cave-of-summons' },
  { id: 'c226', kind: 'chest', location: 'Cave of Summons - B2', contents: ['Hi-Potion'], hint: 'Southeast corner', chapterId: 'ch25-cave-of-summons' },
  { id: 'c227', kind: 'chest', location: 'Cave of Summons - B2', contents: ['Cottage'], hint: 'West, north, then northwest', chapterId: 'ch25-cave-of-summons' },
  { id: 'c228', kind: 'chest', location: 'Cave of Summons - B3', contents: ['Phoenix Down'], hint: 'South along the linear path', chapterId: 'ch25-cave-of-summons' },
  { id: 'c229', kind: 'chest', location: 'Cave of Summons - B3', contents: ['Bestiary'], hint: 'East past the split', chapterId: 'ch25-cave-of-summons' },
  { id: 'c232', kind: 'chest', location: 'Cave of Summons - B3', contents: ['Hi-Potion', 'Poison Axe', 'Kikuichimonji'], hint: 'Secret passage on the right wall', chapterId: 'ch25-cave-of-summons' },
  { id: 'c233', kind: 'chest', location: 'Cave of Summons - B3', contents: ['Defender'], hint: 'North exit of the passage (Warrior x5)', monsterInABox: true, chapterId: 'ch25-cave-of-summons' },

  // Land of Summons
  { id: 'c234', kind: 'chest', location: 'Land of Summons', contents: ['Ether'], hint: 'Northwest of the warp pad', chapterId: 'ch26-land-of-summons' },
  { id: 'c235', kind: 'chest', location: 'Land of Summons', contents: ['Bestiary'], hint: 'Further north', chapterId: 'ch26-land-of-summons' },
  { id: 'c236', kind: 'chest', location: 'Land of Summons', contents: ['5000 Gil'], hint: 'Clockwise to the east side', chapterId: 'ch26-land-of-summons' },
  { id: 'c237', kind: 'chest', location: 'Land of Summons', contents: ['6000 Gil'], hint: 'Bottom area', chapterId: 'ch26-land-of-summons' },
  { id: 'c241', kind: 'chest', location: 'Land of Summons - Secret Room', contents: ["Youichi's Bow", 'Dry Ether', 'Yoichi Arrow', 'Elixir'], hint: 'Step on the shaded tile north of the 6000 Gil chest', chapterId: 'ch26-land-of-summons' },
  { id: 'c242', kind: 'chest', location: 'Land of Summons', contents: ['Rat Tail'], hint: 'Take the north warp, step off and back on, then walk south', chapterId: 'ch26-land-of-summons' },
  { id: 'c244', kind: 'chest', location: 'Land of Summons - Town', contents: ['Bestiary', 'Phoenix Down'], hint: 'Northwest house', chapterId: 'ch26-land-of-summons' },

  // Sylvan Cave
  { id: 'c246', kind: 'chest', location: 'Sylvan Cave - B1', contents: ['Angel Arrow', 'Bestiary'], hint: 'East of the entrance', chapterId: 'ch27-sylvan-cave' },
  { id: 'c249', kind: 'chest', location: 'Sylvan Cave - B3', contents: ['Hi-Potion', "Maiden's Kiss", 'Fairy Rod'], hint: 'North; the top-right one is via a secret passage below the bottom chest', chapterId: 'ch27-sylvan-cave' },
  { id: 'c253', kind: 'chest', location: 'Sylvan Cave - B2', contents: ['Remedy', 'Bomb Core', '2000 Gil', '3000 Gil'], hint: 'Small room east and south', chapterId: 'ch27-sylvan-cave' },
  { id: 'c258', kind: 'chest', location: 'Sylvan Cave - B2', contents: ["Maiden's Kiss", "Maiden's Kiss", 'Ether', 'Bestiary', 'Emergency Exit'], hint: 'Row of five further south', chapterId: 'ch27-sylvan-cave' },
  { id: 'c261', kind: 'chest', location: 'Sylvan Cave - Hidden Chamber', contents: ['Red Fang', 'White Fang', 'Blue Fang'], hint: 'Top row (Evil Dreamer x6 each)', monsterInABox: true, chapterId: 'ch27-sylvan-cave' },
  { id: 'c264', kind: 'chest', location: 'Sylvan Cave - Hidden Chamber', contents: ['Moonring Blade', 'Avenger', 'Medusa Arrow'], hint: 'Bottom row (Malboros and Mammons; Undergrounder x2)', monsterInABox: true, chapterId: 'ch27-sylvan-cave' },
  { id: 'c265', kind: 'chest', location: 'Sylvan Cave - B1', contents: ['Elven Bow'], hint: 'Secret passage northeast in the second B1 area', chapterId: 'ch27-sylvan-cave' },
  { id: 'c267', kind: 'chest', location: 'Sylvan Cave - B1', contents: ['Cottage', '1000 Gil'], hint: 'Northwest path from the entrance', chapterId: 'ch27-sylvan-cave' },
  { id: 'c268', kind: 'chest', location: 'Sylvan Cave - B2', contents: ['Mage Masher'], hint: 'Winding secret passage east (Tiny Toad x6, Bog Witch)', monsterInABox: true, chapterId: 'ch27-sylvan-cave' },
  { id: 'c273', kind: 'chest', location: 'Sylvan Cave - B1', contents: ['Arctic Wind', 'Golden Apple', 'Soma Drop', 'Ether', 'Hi-Potion'], hint: 'Up the middle staircase from B2', chapterId: 'ch27-sylvan-cave' },
  { id: 'c274', kind: 'chest', location: 'Sylvan Cave - B3', contents: ['Elixir'], hint: 'Near the entrance', chapterId: 'ch27-sylvan-cave' },
  { id: 'c276', kind: 'chest', location: 'Sylvan Cottage', contents: ['Hell Claw', 'Cat Claw'], chapterId: 'ch27-sylvan-cave' },

  // Sealed Cavern
  { id: 'c277', kind: 'chest', location: 'Sealed Cavern - B1', contents: ['Bestiary'], hint: 'South down the rope', chapterId: 'ch28-sealed-cavern' },
  { id: 'c279', kind: 'chest', location: 'Sealed Cavern - B1', contents: ['Kotetsu', 'Ether'], hint: 'North door', chapterId: 'ch28-sealed-cavern' },
  { id: 'c281', kind: 'chest', location: 'Sealed Cavern - B1', contents: ['Hi-Potion', 'Ether'], hint: 'West then north up the rope, through the door', chapterId: 'ch28-sealed-cavern' },
  { id: 'c282', kind: 'chest', location: 'Sealed Cavern - B2', contents: ['Bestiary'], hint: 'South down the rope', chapterId: 'ch28-sealed-cavern' },
  { id: 'c283', kind: 'chest', location: 'Sealed Cavern - B2', contents: ['Phoenix Down'], hint: 'East of the rope', chapterId: 'ch28-sealed-cavern' },
  { id: 'c284', kind: 'chest', location: 'Sealed Cavern - B2', contents: ['Light Sword'], hint: 'Second door from the right', chapterId: 'ch28-sealed-cavern' },
  { id: 'c287', kind: 'chest', location: 'Sealed Cavern - B2', contents: ['Elixir', 'Fuma Shuriken', 'Light Curtain'], hint: 'Third door from the right', chapterId: 'ch28-sealed-cavern' },
  { id: 'c289', kind: 'chest', location: 'Sealed Cavern - B2', contents: ['Kotetsu', 'Black Cowl'], hint: 'Leftmost door', chapterId: 'ch28-sealed-cavern' },
  { id: 'c290', kind: 'chest', location: 'Sealed Cavern - B2', contents: ['Ether'], hint: 'Through the southwest door, on the path', chapterId: 'ch28-sealed-cavern' },
  { id: 'c292', kind: 'chest', location: 'Sealed Cavern - B3', contents: ['Hi-Potion', 'Phoenix Down'], hint: 'First room', chapterId: 'ch28-sealed-cavern' },
  { id: 'c293', kind: 'chest', location: 'Sealed Cavern - B3', contents: ['Bell of Silence'], hint: 'Across the bridge, all the way east', chapterId: 'ch28-sealed-cavern' },
  { id: 'c295', kind: 'chest', location: 'Sealed Cavern - B3', contents: ['Dry Ether', 'X-Potion'], hint: 'Eastern door past the middle rope', chapterId: 'ch28-sealed-cavern' },

  // Side Quests: Part I
  { id: 'h51', kind: 'hidden', location: "Kokkol's Smithy", contents: ['Remedy', 'Soma Drop'], hint: 'Marked pot on 1F, left shelf on 2F', chapterId: 'ch29-side-quests-1' },

  // The Moon
  { id: 'c296', kind: 'chest', location: 'Western Lunar Path', contents: ['Golden Apple'], hint: 'East at the first split (Eukaryote x2, Prokaryote x2)', monsterInABox: true, chapterId: 'ch30-the-moon' },
  { id: 'c298', kind: 'chest', location: 'Western Lunar Path', contents: ['Lunar Curtain', 'Stardust'], hint: 'Right side, just before the north exit', chapterId: 'ch30-the-moon' },

  // Cave of Bahamut and Hummingway Home
  { id: 'c300', kind: 'chest', location: 'Cave of Bahamut - B1', contents: ['Genji Gloves', 'Genji Shield'], hint: 'South past the split; the shield is via a secret passage on the rock formation to the east', chapterId: 'ch31-cave-of-bahamut' },
  { id: 'c302', kind: 'chest', location: 'Cave of Bahamut - B2', contents: ['Genji Armor', 'Genji Helm'], hint: 'East then north; east past the wizard', chapterId: 'ch31-cave-of-bahamut' },

  // The Giant of Babel
  { id: 'c307', kind: 'chest', location: 'Chest of the Giant', contents: ['Shuriken', 'Hi-Potion', 'Ether', 'Siren', 'Yoichi Arrow'], missable: true, chapterId: 'ch32-giant-of-babel' },
  { id: 'c309', kind: 'chest', location: 'Stomach of the Giant', contents: ['Silver Apple', 'Soma Drop'], hint: 'Up the stairs; northeast of the pad', missable: true, chapterId: 'ch32-giant-of-babel' },
  { id: 'c310', kind: 'chest', location: 'Inner Path of the Giant', contents: ['Elixir'], hint: 'Halfway along the path east (Last Arm)', monsterInABox: true, missable: true, chapterId: 'ch32-giant-of-babel' },

  // Side Quests: Part II
  { id: 'h53', kind: 'hidden', location: 'Land of Summons - Town', contents: ['Grimoire', 'Grimoire'], hint: 'Bookshelves in the weapon shop and armor shop (only after the Giant of Babel)', chapterId: 'ch33-side-quests-2' },
  { id: 'h54', kind: 'hidden', location: 'Sylvan Cottage', contents: ['Grimoire'], hint: 'Bookshelf (only after the Giant of Babel)', chapterId: 'ch33-side-quests-2' },

  // Lunar Subterrane: Upper Floors
  { id: 'c311', kind: 'chest', location: 'Lunar Subterrane - B1', contents: ['Black Garb'], hint: 'Secret passage on the east wall (Giant Warrior x2)', monsterInABox: true, chapterId: 'ch34-lunar-subterrane' },
  { id: 'c312', kind: 'chest', location: 'Lunar Subterrane - B2', contents: ["Sage's Staff"], hint: 'North (Selene Guardian x2, Dark Sage x2)', monsterInABox: true, chapterId: 'ch34-lunar-subterrane' },
  { id: 'c313', kind: 'chest', location: 'Lunar Subterrane - B2', contents: ['Flame Whip'], hint: 'Secret passage far east: 7 north, then west, south, west, north, east', chapterId: 'ch34-lunar-subterrane' },
  { id: 'c314', kind: 'chest', location: 'Lunar Subterrane - B2', contents: ['Dragon Shield'], hint: 'West through another passage, by the exit', chapterId: 'ch34-lunar-subterrane' },
  { id: 'c315', kind: 'chest', location: 'Lunar Subterrane - B3', contents: ['Dragon Helm'], hint: 'Secret passage south then east of the entrance', chapterId: 'ch34-lunar-subterrane' },
  { id: 'c317', kind: 'chest', location: 'Lunar Subterrane - B3', contents: ['Dragon Mail', 'Dragon Gloves'], hint: 'Another passage south then east of the Dragon Helm', chapterId: 'ch34-lunar-subterrane' },
  { id: 'c318', kind: 'chest', location: 'Lunar Subterrane - B4', contents: ['Artemis Arrow'], hint: 'East past the stairs', chapterId: 'ch34-lunar-subterrane' },
  { id: 'c319', kind: 'chest', location: 'Lunar Subterrane - B4', contents: ['Elixir'], hint: 'Western room below the large staircase', chapterId: 'ch34-lunar-subterrane' },
  { id: 'c321', kind: 'chest', location: 'Lunar Subterrane - B4', contents: ['White Fang', 'X-Potion'], hint: 'Northeast and southeast from the split', chapterId: 'ch34-lunar-subterrane' },
  { id: 'c322', kind: 'chest', location: 'Lunar Subterrane - B4', contents: ['Stardust Rod'], hint: 'Past the south exit (Behemoth)', monsterInABox: true, chapterId: 'ch34-lunar-subterrane' },
  { id: 'c323', kind: 'chest', location: 'Lunar Subterrane - B5', contents: ['Crystal Shield'], hint: 'Left at the bottom of the stairs (Red Dragon, Blue Dragon)', monsterInABox: true, chapterId: 'ch34-lunar-subterrane' },
  { id: 'c324', kind: 'chest', location: 'Lunar Subterrane - B5', contents: ['Protect Ring'], hint: 'Obvious secret passage northeast', chapterId: 'ch34-lunar-subterrane' },
  { id: 'c325', kind: 'chest', location: 'Lunar Subterrane - B5', contents: ['Crystal Mail'], hint: 'On the ledge past the bottom door (Behemoth)', monsterInABox: true, chapterId: 'ch34-lunar-subterrane' },
  { id: 'c326', kind: 'chest', location: 'Lunar Subterrane - B5', contents: ['Crystal Gloves'], hint: 'North door, northeast (Red Dragon x2)', monsterInABox: true, chapterId: 'ch34-lunar-subterrane' },
  { id: 'c327', kind: 'chest', location: 'Lunar Subterrane - B5', contents: ['White Robe'], hint: 'West door, around the wall to the southwest', chapterId: 'ch34-lunar-subterrane' },
  { id: 'c328', kind: 'chest', location: 'Lunar Subterrane - B5', contents: ['Crystal Helm'], hint: 'Through the north door, northwest (Dinozombie, Dark Sage)', monsterInABox: true, chapterId: 'ch34-lunar-subterrane' },
  { id: 'c329', kind: 'chest', location: 'Lunar Subterrane - B5', contents: ['Red Fang'], hint: 'Eastern room past the large staircase (the Flan Princess room)', chapterId: 'ch34-lunar-subterrane' },
  { id: 'c331', kind: 'chest', location: 'Lunar Subterrane - B6', contents: ['Artemis Arrow', 'Fuma Shuriken'], hint: 'On either side', chapterId: 'ch34-lunar-subterrane' },
  { id: 'c332', kind: 'chest', location: 'Lunar Subterrane - B6', contents: ['Cottage'], hint: 'Western stairs', chapterId: 'ch34-lunar-subterrane' },
  { id: 'c333', kind: 'chest', location: 'Lunar Subterrane - B6', contents: ['Golden Apple'], hint: 'Across the hidden bridge west, then a passage from the northwest corner', chapterId: 'ch34-lunar-subterrane' },
  { id: 'c334', kind: 'chest', location: 'Lunar Subterrane - B5', contents: ['Protect Ring'], hint: 'On the stairs after the warp pads (Behemoth)', monsterInABox: true, chapterId: 'ch34-lunar-subterrane' },

  // Lunar Subterrane: The Depths
  { id: 'c335', kind: 'chest', location: 'Lunar Subterrane - B6', contents: ['Minerva Bustier'], hint: 'Past the eastern stairs by the Cottage chest (Selene Guardian x3, Dark Sage)', monsterInABox: true, chapterId: 'ch35-lunar-depths' },
  { id: 'c337', kind: 'chest', location: 'Lunar Subterrane - B7', contents: ['Ribbon', 'Ribbon'], hint: 'Behind the Lunasaurs in the third room', chapterId: 'ch35-lunar-depths' },
  { id: 'c338', kind: 'chest', location: 'Lunar Subterrane - B8', contents: ['Fuma Shuriken'], hint: 'Down the eastern stairs, then all the way west', chapterId: 'ch35-lunar-depths' },
  { id: 'c340', kind: 'chest', location: 'Lunar Subterrane - B9', contents: ['Elixir', 'Gysahl Whistle'], hint: 'Bottom of the stairs, and the end of the linear path', chapterId: 'ch35-lunar-depths' },
  { id: 'c342', kind: 'chest', location: 'Lunar Subterrane - B10', contents: ['Fuma Shuriken', 'Fuma Shuriken'], hint: 'East and west sides past the stairs - the last chests in the game', chapterId: 'ch35-lunar-depths' },
]
