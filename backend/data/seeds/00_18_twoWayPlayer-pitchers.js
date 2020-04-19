exports.seed = function (knex, Promise) {
  return knex('pitchers').insert([
    {
      // id 1
      'firstName': 'Brendan',
      'lastName': 'McKay',
      'birthday': '12/18/1995',
      'bats': 'L',
      'throws': 'L',
      'currentTeam': 'Rays',
      'imageURL': 'https://d3k2oh6evki4b7.cloudfront.net/req/202001270/images/headshots/1/1e42273e_mlbam.jpg',
      'primaryPosition': 'Designated Hitter',
      'otherPositions': 'Starting Pitcher',
      'GamesPlayed2017': 0,
      'BA2017': 0,
      'OBP2017': 0,
      'SLG2017': 0,
      'PA2017': 0,
      'Doubles2017': 0,
      'HR2017': 0,
      'Runs2017': 0,
      'RBI2017': 0,
      'LineupSlot2017': '',
      'GBPercent2017': '',
      'LDPercent2017': '',
      'FBPercent2017': '',
      'PullPercent2017': '',
      'CenterPercent2017': '',
      'OppoPercent2017': '',
      'HRPerFB2017': '',
      'HardHitPercent2017': '',
      'ExitVelo2017': 0,
      'FlyBallLineDriveExitVelo2017': 0,
      'LaunchAngle2017': 0,
      'BarrelPercent2017': '',
      'BABIP2017': 0,
      'WOBA2017': 0,
      'xWOBA2017': 0,
      'xBA2017': 0,
      'AvgHRDistance2017': 0,
      'WRCPlus2017': 0,
      'OPSPlus2017': 0,
      'BBPercent2017': '',
      'KPercent2017': '',
      'ChaseRate2017': '',
      'ContactPercent2017': '',
      'SprintSpeed2017': 0,
      'StolenBases2017': 0,
      'StolenBasePercent2017': '',
      'FWAR2017': 0,
      'GamesPlayed2018': 0,
      'BA2018': 0,
      'OBP2018': 0,
      'SLG2018': 0,
      'PA2018': 0,
      'Doubles2018': 0,
      'HR2018': 0,
      'Runs2018': 0,
      'RBI2018': 0,
      'LineupSlot2018': '',
      'GBPercent2018': '',
      'LDPercent2018': '',
      'FBPercent2018': '',
      'PullPercent2018': '',
      'CenterPercent2018': '',
      'OppoPercent2018': '',
      'HRPerFB2018': '',
      'HardHitPercent2018': '',
      'ExitVelo2018': 0,
      'FlyBallLineDriveExitVelo2018': 0,
      'LaunchAngle2018': 0,
      'BarrelPercent2018': '',
      'BABIP2018': 0,
      'WOBA2018': 0,
      'xWOBA2018': 0,
      'xBA2018': 0,
      'AvgHRDistance2018': 0,
      'WRCPlus2018': 0,
      'OPSPlus2018': 0,
      'BBPercent2018': '',
      'KPercent2018': '',
      'ChaseRate2018': '',
      'ContactPercent2018': '',
      'SprintSpeed2018': 0,
      'StolenBases2018': 0,
      'StolenBasePercent2018': '',
      'FWAR2018': 0,
      'GamesPlayed2019': 18,
      'BA2019': .200,
      'OBP2019': .273,
      'SLG2019': .500,
      'PA2019': 11,
      'Doubles2019': 0,
      'HR2019': 1,
      'Runs2019': 2,
      'RBI2019': 1,
      'LineupSlot2019': '8th',
      'GBPercent2019': '62.5%',
      'LDPercent2019': '12.5%',
      'FBPercent2019': '25.0%',
      'PullPercent2019': '75.0%',
      'CenterPercent2019': '12.5%',
      'OppoPercent2019': '12.5%',
      'HRPerFB2019': '50.0%',
      'HardHitPercent2019': '44.4%',
      'ExitVelo2019': 90.5,
      'FlyBallLineDriveExitVelo2019': 97.7,
      'LaunchAngle2019': 16.7,
      'BarrelPercent2019': '10.4%',
      'BABIP2019': .143,
      'WOBA2019': .333,
      'xWOBA2019': .322,
      'xBA2019': .261,
      'AvgHRDistance2019': 420,
      'WRCPlus2019': 101,
      'OPSPlus2019': 101,
      'BBPercent2019': '9.1%',
      'KPercent2019': '18.2%',
      'ChaseRate2019': '29.0%',
      'ContactPercent2019': '81.3%',
      'SprintSpeed2019': 26.4,
      'StolenBases2019': 0,
      'StolenBasePercent2019': '0%',
      'FWAR2019': 0.0,
      'SteamerPAProjection': 13,
      'SteamerAVGProjection': .214,
      'SteamerOBPProjection': .290,
      'SteamerSLGProjection': .377,
      'SteamerDoublesProjection': 0,
      'SteamerHRProjection': 0,
      'SteamerRunsProjection': 1,
      'SteamerRBIProjection': 1,
      'SteamerSBProjection': 0,
      'SteamerFWARProjection': 0.0,
      'Games2017': 0,
      'GamesStarted2017': 0,
      'InningsPitched2017': 0.0,
      'InningsPitchedPerGameStarted2017': 0.0,
      'QS2017': 0,
      'ERA2017': 0.0,
      'ERAPlus2017': 0,
      'FIP2017': 0.0,
      'xFIP2017': 0.0,
      'SIERA2017': 0.0,
      'WHIP2017': 0.0,
      'RawKs2017': 0,
      'HitsPer92017': 0.0,
      'HRsPer92017': 0.0,
      'BBPer92017': 0.0,
      'KPer92017': 0.0,
      'KDividedByBB2017': 0.0,
      'Saves2017': 0,
      'PitcherKPercent2017': '',
      'PitcherBBPercent2017': '',
      'KMinusBBPercent2017': '',
      'PitcherBABIP2017': .0,
      'LOBPercent2017': '',
      'HRPerFBPercent2017': '',
      'PitcherGBPercent2017': '',
      'PitcherLDPercent2017': '',
      'PitcherFBPercent2017': '',
      'IFFBPercent2017': '',
      'SoftContactPercent2017': '',
      'MediumContactPercent2017': '',
      'HardContactPercent2017': '',
      'FirstStrikePercent2017': '',
      'PitcherExitVelo2017': 0.0,
      'PitcherFlyBallLineDriveExitVelo2017': 0.0,
      'PitcherBarrelPercent2017': '',
      'PitcherLaunchAngle2017': 0.0,
      'AVGFastballVelo2017': 0.0,
      'MaxFastballVelo2017': 0.0,
      'FourSeamFastballUsagePercent2017': '',
      'SinkerUsagePercent2017': '',
      'CutterUsagePercent2017': '',
      'SliderUsagePercent2017': '',
      'ChangeupUsagePercent2017': '',
      'CurveUsagePercent2017': '',
      'SplitterUsagePercent2017': '',
      'KnuckleCurveUsagePercent2017': '',
      'PitcherFWAR2017': 0.0,
      'Games2018': 0,
      'GamesStarted2018': 0,
      'InningsPitched2018': 0.0,
      'InningsPitchedPerGameStarted2018': 0.0,
      'QS2018': 0,
      'ERA2018': 0.0,
      'ERAPlus2018': 0,
      'FIP2018': 0.0,
      'xFIP2018': 0.0,
      'SIERA2018': 0.0,
      'WHIP2018': 0.0,
      'RawKs2018': 0,
      'HitsPer92018': 0.0,
      'HRsPer92018': 0.0,
      'BBPer92018': 0.0,
      'KPer92018': 0.0,
      'KDividedByBB2018': 0.0,
      'Saves2018': 0,
      'PitcherKPercent2018': '',
      'PitcherBBPercent2018': '',
      'KMinusBBPercent2018': '',
      'PitcherBABIP2018': .0,
      'LOBPercent2018': '',
      'HRPerFBPercent2018': '',
      'PitcherGBPercent2018': '',
      'PitcherLDPercent2018': '',
      'PitcherFBPercent2018': '',
      'IFFBPercent2018': '',
      'SoftContactPercent2018': '',
      'MediumContactPercent2018': '',
      'HardContactPercent2018': '',
      'FirstStrikePercent2018': '',
      'PitcherExitVelo2018': 0.0,
      'PitcherFlyBallLineDriveExitVelo2018': 0.0,
      'PitcherBarrelPercent2018': '',
      'PitcherLaunchAngle2018': 0.0,
      'AVGFastballVelo2018': 0.0,
      'MaxFastballVelo2018': 0.0,
      'FourSeamFastballUsagePercent2018': '',
      'SinkerUsagePercent2018': '',
      'CutterUsagePercent2018': '',
      'SliderUsagePercent2018': '',
      'ChangeupUsagePercent2018': '',
      'CurveUsagePercent2018': '',
      'SplitterUsagePercent2018': '',
      'KnuckleCurveUsagePercent2018': '',
      'PitcherFWAR2018': 0.0,
      'Games2019': 0,
      'GamesStarted2019': 0,
      'InningsPitched2019': 0.0,
      'InningsPitchedPerGameStarted2019': 0.0,
      'QS2019': 0,
      'ERA2019': 0.0,
      'ERAPlus2019': 0,
      'FIP2019': 0.0,
      'xFIP2019': 0.0,
      'SIERA2019': 0.0,
      'WHIP2019': 0.0,
      'RawKs2019': 0,
      'HitsPer92019': 0.0,
      'HRsPer92019': 0.0,
      'BBPer92019': 0.0,
      'KPer92019': 0.0,
      'KDividedByBB2019': 0.0,
      'Saves2019': 0,
      'PitcherKPercent2019': '',
      'PitcherBBPercent2019': '',
      'KMinusBBPercent2019': '',
      'PitcherBABIP2019': .0,
      'LOBPercent2019': '',
      'HRPerFBPercent2019': '',
      'PitcherGBPercent2019': '',
      'PitcherLDPercent2019': '',
      'PitcherFBPercent2019': '',
      'IFFBPercent2019': '',
      'SoftContactPercent2019': '',
      'MediumContactPercent2019': '',
      'HardContactPercent2019': '',
      'FirstStrikePercent2019': '',
      'PitcherExitVelo2019': 0.0,
      'PitcherFlyBallLineDriveExitVelo2019': 0.0,
      'PitcherBarrelPercent2019': '',
      'PitcherLaunchAngle2019': 0.0,
      'AVGFastballVelo2019': 0.0,
      'MaxFastballVelo2019': 0.0,
      'FourSeamFastballUsagePercent2019': '',
      'SinkerUsagePercent2019': '',
      'CutterUsagePercent2019': '',
      'SliderUsagePercent2019': '',
      'ChangeupUsagePercent2019': '',
      'CurveUsagePercent2019': '',
      'SplitterUsagePercent2019': '',
      'KnuckleCurveUsagePercent2019': '',
      'PitcherFWAR2019': 0.0,
      'SteamerGamesProjection': 23,
      'SteamerGamesStartedProjection': 18,
      'SteamerInningsPitchedProjection': 101.0,
      'SteamerQSProjection': 8.5,
      'SteamerERAProjection': 3.89,
      'SteamerFIPProjection': 4.03,
      'SteamerWHIPProjection': 1.22,
      'SteamerRawKsProjection': 112,
      'SteamerKPer9Projection': 9.95,
      'SteamerSavesProjection': 0,
      'PitcherSteamerFWARProjection': 1.7,
    },
    {
      // id 2
      'firstName': 'Shohei',
      'lastName': 'Ohtani',
      'birthday': '7/5/1994',
      'bats': 'L',
      'throws': 'R',
      'currentTeam': 'Angels',
      'imageURL': 'https://d3k2oh6evki4b7.cloudfront.net/req/202001270/images/headshots/2/270bfa31_mlbam.jpg',
      'primaryPosition': 'Designated Hitter',
      'otherPositions': 'Starting Pitcher',
      'GamesPlayed2017': 0,
      'BA2017': 0,
      'OBP2017': 0,
      'SLG2017': 0,
      'PA2017': 0,
      'Doubles2017': 0,
      'HR2017': 0,
      'Runs2017': 0,
      'RBI2017': 0,
      'LineupSlot2017': '',
      'GBPercent2017': '',
      'LDPercent2017': '',
      'FBPercent2017': '',
      'PullPercent2017': '',
      'CenterPercent2017': '',
      'OppoPercent2017': '',
      'HRPerFB2017': '',
      'HardHitPercent2017': '',
      'ExitVelo2017': 0,
      'FlyBallLineDriveExitVelo2017': 0,
      'LaunchAngle2017': 0,
      'BarrelPercent2017': '',
      'BABIP2017': 0,
      'WOBA2017': 0,
      'xWOBA2017': 0,
      'xBA2017': 0,
      'AvgHRDistance2017': 0,
      'WRCPlus2017': 0,
      'OPSPlus2017': 0,
      'BBPercent2017': '',
      'KPercent2017': '',
      'ChaseRate2017': '',
      'ContactPercent2017': '',
      'SprintSpeed2017': 0,
      'StolenBases2017': 0,
      'StolenBasePercent2017': '',
      'FWAR2017': 0,
      'GamesPlayed2018': 114,
      'BA2018': .285,
      'OBP2018': .361,
      'SLG2018': .564,
      'PA2018': 367,
      'Doubles2018': 21,
      'HR2018': 22,
      'Runs2018': 59,
      'RBI2018': 61,
      'LineupSlot2018': '5th',
      'GBPercent2018': '43.6%',
      'LDPercent2018': '23.6%',
      'FBPercent2018': '32.9%',
      'PullPercent2018': '36.9%',
      'CenterPercent2018': '37.3%',
      'OppoPercent2018': '25.8%',
      'HRPerFB2018': '29.7%',
      'HardHitPercent2018': '50.2%',
      'ExitVelo2018': 92.6,
      'FlyBallLineDriveExitVelo2018': 97.8,
      'LaunchAngle2018': 12.3,
      'BarrelPercent2018': '16.0%',
      'BABIP2018': .350,
      'WOBA2018': .390,
      'xWOBA2018': .383,
      'xBA2018': .276,
      'AvgHRDistance2018': 413,
      'WRCPlus2018': 151,
      'OPSPlus2018': 151,
      'BBPercent2018': '10.1%',
      'KPercent2018': '27.8%',
      'ChaseRate2018': '27.8%',
      'ContactPercent2018': '71.6%',
      'SprintSpeed2018': 28.4,
      'StolenBases2018': 10,
      'StolenBasePercent2018': '71.4%',
      'FWAR2018': 2.8,
      'GamesPlayed2019': 106,
      'BA2019': .286,
      'OBP2019': .343,
      'SLG2019': .505,
      'PA2019': 425,
      'Doubles2019': 20,
      'HR2019': 18,
      'Runs2019': 51,
      'RBI2019': 62,
      'LineupSlot2019': '3rd',
      'GBPercent2019': '49.6%',
      'LDPercent2019': '25.9%',
      'FBPercent2019': '24.5%',
      'PullPercent2019': '30.9%',
      'CenterPercent2019': '37.8%',
      'OppoPercent2019': '31.3%',
      'HRPerFB2019': '26.5%',
      'HardHitPercent2019': '47.1%',
      'ExitVelo2019': 92.8,
      'FlyBallLineDriveExitVelo2019': 97.0,
      'LaunchAngle2019': 6.8,
      'BarrelPercent2019': '12.2%',
      'BABIP2019': .354,
      'WOBA2019': .352,
      'xWOBA2019': .349,
      'xBA2019': .282,
      'AvgHRDistance2019': 406,
      'WRCPlus2019': 123,
      'OPSPlus2019': 123,
      'BBPercent2019': '7.8%',
      'KPercent2019': '25.9%',
      'ChaseRate2019': '30.4%',
      'ContactPercent2019': '75.0%',
      'SprintSpeed2019': 28.2,
      'StolenBases2019': 12,
      'StolenBasePercent2019': '80%',
      'FWAR2019': 1.8,
      'SteamerPAProjection': 486,
      'SteamerAVGProjection': .281,
      'SteamerOBPProjection': .352,
      'SteamerSLGProjection': .525,
      'SteamerDoublesProjection': 23,
      'SteamerHRProjection': 25,
      'SteamerRunsProjection': 70,
      'SteamerRBIProjection': 78,
      'SteamerSBProjection': 11,
      'SteamerFWARProjection': 2.3,
      'Games2017': 0,
      'GamesStarted2017': 0,
      'InningsPitched2017': 0.0,
      'InningsPitchedPerGameStarted2017': 0.0,
      'QS2017': 0,
      'ERA2017': 0.0,
      'ERAPlus2017': 0,
      'FIP2017': 0.0,
      'xFIP2017': 0.0,
      'SIERA2017': 0.0,
      'WHIP2017': 0.0,
      'RawKs2017': 0,
      'HitsPer92017': 0.0,
      'HRsPer92017': 0.0,
      'BBPer92017': 0.0,
      'KPer92017': 0.0,
      'KDividedByBB2017': 0.0,
      'Saves2017': 0,
      'PitcherKPercent2017': '',
      'PitcherBBPercent2017': '',
      'KMinusBBPercent2017': '',
      'PitcherBABIP2017': .0,
      'LOBPercent2017': '',
      'HRPerFBPercent2017': '',
      'PitcherGBPercent2017': '',
      'PitcherLDPercent2017': '',
      'PitcherFBPercent2017': '',
      'IFFBPercent2017': '',
      'SoftContactPercent2017': '',
      'MediumContactPercent2017': '',
      'HardContactPercent2017': '',
      'FirstStrikePercent2017': '',
      'PitcherExitVelo2017': 0.0,
      'PitcherFlyBallLineDriveExitVelo2017': 0.0,
      'PitcherBarrelPercent2017': '',
      'PitcherLaunchAngle2017': 0.0,
      'AVGFastballVelo2017': 0.0,
      'MaxFastballVelo2017': 0.0,
      'FourSeamFastballUsagePercent2017': '',
      'SinkerUsagePercent2017': '',
      'CutterUsagePercent2017': '',
      'SliderUsagePercent2017': '',
      'ChangeupUsagePercent2017': '',
      'CurveUsagePercent2017': '',
      'SplitterUsagePercent2017': '',
      'KnuckleCurveUsagePercent2017': '',
      'PitcherFWAR2017': 0.0,
      'Games2018': 0,
      'GamesStarted2018': 0,
      'InningsPitched2018': 0.0,
      'InningsPitchedPerGameStarted2018': 0.0,
      'QS2018': 0,
      'ERA2018': 0.0,
      'ERAPlus2018': 0,
      'FIP2018': 0.0,
      'xFIP2018': 0.0,
      'SIERA2018': 0.0,
      'WHIP2018': 0.0,
      'RawKs2018': 0,
      'HitsPer92018': 0.0,
      'HRsPer92018': 0.0,
      'BBPer92018': 0.0,
      'KPer92018': 0.0,
      'KDividedByBB2018': 0.0,
      'Saves2018': 0,
      'PitcherKPercent2018': '',
      'PitcherBBPercent2018': '',
      'KMinusBBPercent2018': '',
      'PitcherBABIP2018': .0,
      'LOBPercent2018': '',
      'HRPerFBPercent2018': '',
      'PitcherGBPercent2018': '',
      'PitcherLDPercent2018': '',
      'PitcherFBPercent2018': '',
      'IFFBPercent2018': '',
      'SoftContactPercent2018': '',
      'MediumContactPercent2018': '',
      'HardContactPercent2018': '',
      'FirstStrikePercent2018': '',
      'PitcherExitVelo2018': 0.0,
      'PitcherFlyBallLineDriveExitVelo2018': 0.0,
      'PitcherBarrelPercent2018': '',
      'PitcherLaunchAngle2018': 0.0,
      'AVGFastballVelo2018': 0.0,
      'MaxFastballVelo2018': 0.0,
      'FourSeamFastballUsagePercent2018': '',
      'SinkerUsagePercent2018': '',
      'CutterUsagePercent2018': '',
      'SliderUsagePercent2018': '',
      'ChangeupUsagePercent2018': '',
      'CurveUsagePercent2018': '',
      'SplitterUsagePercent2018': '',
      'KnuckleCurveUsagePercent2018': '',
      'PitcherFWAR2018': 0.0,
      'Games2019': 0,
      'GamesStarted2019': 0,
      'InningsPitched2019': 0.0,
      'InningsPitchedPerGameStarted2019': 0.0,
      'QS2019': 0,
      'ERA2019': 0.0,
      'ERAPlus2019': 0,
      'FIP2019': 0.0,
      'xFIP2019': 0.0,
      'SIERA2019': 0.0,
      'WHIP2019': 0.0,
      'RawKs2019': 0,
      'HitsPer92019': 0.0,
      'HRsPer92019': 0.0,
      'BBPer92019': 0.0,
      'KPer92019': 0.0,
      'KDividedByBB2019': 0.0,
      'Saves2019': 0,
      'PitcherKPercent2019': '',
      'PitcherBBPercent2019': '',
      'KMinusBBPercent2019': '',
      'PitcherBABIP2019': .0,
      'LOBPercent2019': '',
      'HRPerFBPercent2019': '',
      'PitcherGBPercent2019': '',
      'PitcherLDPercent2019': '',
      'PitcherFBPercent2019': '',
      'IFFBPercent2019': '',
      'SoftContactPercent2019': '',
      'MediumContactPercent2019': '',
      'HardContactPercent2019': '',
      'FirstStrikePercent2019': '',
      'PitcherExitVelo2019': 0.0,
      'PitcherFlyBallLineDriveExitVelo2019': 0.0,
      'PitcherBarrelPercent2019': '',
      'PitcherLaunchAngle2019': 0.0,
      'AVGFastballVelo2019': 0.0,
      'MaxFastballVelo2019': 0.0,
      'FourSeamFastballUsagePercent2019': '',
      'SinkerUsagePercent2019': '',
      'CutterUsagePercent2019': '',
      'SliderUsagePercent2019': '',
      'ChangeupUsagePercent2019': '',
      'CurveUsagePercent2019': '',
      'SplitterUsagePercent2019': '',
      'KnuckleCurveUsagePercent2019': '',
      'PitcherFWAR2019': 0.0,
      'SteamerGamesProjection': 18,
      'SteamerGamesStartedProjection': 18,
      'SteamerInningsPitchedProjection': 101.0,
      'SteamerQSProjection': 9.3,
      'SteamerERAProjection': 3.70,
      'SteamerFIPProjection': 3.77,
      'SteamerWHIPProjection': 1.21,
      'SteamerRawKsProjection': 124,
      'SteamerKPer9Projection': 11.15,
      'SteamerSavesProjection': 0,
      'PitcherSteamerFWARProjection': 2.1,
    },
  ]);
};