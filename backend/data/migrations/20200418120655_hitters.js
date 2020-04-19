
exports.up = function (knex, Promise) {
    return knex.schema.createTable('hitters', hitter => {
        hitter.increments();
        hitter.string('firstName', 50);
        hitter.string('lastName', 50);
        hitter.string('birthday', 50);
        hitter.string('bats', 1);
        hitter.string('throws', 1);
        hitter.string('currentTeam', 50);
        hitter.string('imageURL', 500);
        hitter.string('primaryPosition', 50);
        hitter.string('otherPositions', 50);
        hitter.integer('GamesPlayed2017');
        hitter.decimal('BA2017', 8, 3);
        hitter.decimal('OBP2017', 8, 3);
        hitter.decimal('SLG2017', 8, 3);
        hitter.integer('PA2017');
        hitter.integer('Doubles2017');
        hitter.integer('HR2017');
        hitter.integer('Runs2017');
        hitter.integer('RBI2017');
        hitter.string('LineupSlot2017', 50);
        hitter.string('GBPercent2017', 50);
        hitter.string('LDPercent2017', 50);
        hitter.string('FBPercent2017', 50);
        hitter.string('PullPercent2017', 50);
        hitter.string('CenterPercent2017', 50);
        hitter.string('OppoPercent2017', 50);
        hitter.string('HRPerFB2017', 50);
        hitter.string('HardHitPercent2017', 50);
        hitter.decimal('ExitVelo2017', 8, 1);
        hitter.decimal('FlyBallLineDriveExitVelo2017', 8, 1);
        hitter.decimal('LaunchAngle2017', 8, 1);
        hitter.string('BarrelPercent2017', 50);
        hitter.decimal('BABIP2017', 8, 3);
        hitter.decimal('WOBA2017', 8, 3);
        hitter.decimal('xWOBA2017', 8, 3);
        hitter.decimal('xBA2017', 8, 3);
        hitter.integer('AvgHRDistance2017');
        hitter.integer('WRCPlus2017');
        hitter.integer('OPSPlus2017');
        hitter.string('BBPercent2017', 50);
        hitter.string('KPercent2017', 50);
        hitter.string('ChaseRate2017', 50);
        hitter.string('ContactPercent2017', 50);
        hitter.decimal('SprintSpeed2017', 8, 1);
        hitter.integer('StolenBases2017');
        hitter.string('StolenBasePercent2017', 50);
        hitter.decimal('FWAR2017', 8, 1);
        hitter.integer('GamesPlayed2018');
        hitter.decimal('BA2018', 8, 3);
        hitter.decimal('OBP2018', 8, 3);
        hitter.decimal('SLG2018', 8, 3);
        hitter.integer('PA2018');
        hitter.integer('Doubles2018');
        hitter.integer('HR2018');
        hitter.integer('Runs2018');
        hitter.integer('RBI2018');
        hitter.string('LineupSlot2018', 50);
        hitter.string('GBPercent2018', 50);
        hitter.string('LDPercent2018', 50);
        hitter.string('FBPercent2018', 50);
        hitter.string('PullPercent2018', 50);
        hitter.string('CenterPercent2018', 50);
        hitter.string('OppoPercent2018', 50);
        hitter.string('HRPerFB2018', 50);
        hitter.string('HardHitPercent2018', 50);
        hitter.decimal('ExitVelo2018', 8, 1);
        hitter.decimal('FlyBallLineDriveExitVelo2018', 8, 1);
        hitter.decimal('LaunchAngle2018', 8, 1);
        hitter.string('BarrelPercent2018', 50);
        hitter.decimal('BABIP2018', 8, 3);
        hitter.decimal('WOBA2018', 8, 3);
        hitter.decimal('xWOBA2018', 8, 3);
        hitter.decimal('xBA2018', 8, 3);
        hitter.integer('AvgHRDistance2018');
        hitter.integer('WRCPlus2018');
        hitter.integer('OPSPlus2018');
        hitter.string('BBPercent2018', 50);
        hitter.string('KPercent2018', 50);
        hitter.string('ChaseRate2018', 50);
        hitter.string('ContactPercent2018', 50);
        hitter.decimal('SprintSpeed2018', 8, 1);
        hitter.integer('StolenBases2018');
        hitter.string('StolenBasePercent2018', 50);
        hitter.decimal('FWAR2018', 8, 1);
        hitter.integer('GamesPlayed2019');
        hitter.decimal('BA2019', 8, 3);
        hitter.decimal('OBP2019', 8, 3);
        hitter.decimal('SLG2019', 8, 3);
        hitter.integer('PA2019');
        hitter.integer('Doubles2019');
        hitter.integer('HR2019');
        hitter.integer('Runs2019');
        hitter.integer('RBI2019');
        hitter.string('LineupSlot2019', 50);
        hitter.string('GBPercent2019', 50);
        hitter.string('LDPercent2019', 50);
        hitter.string('FBPercent2019', 50);
        hitter.string('PullPercent2019', 50);
        hitter.string('CenterPercent2019', 50);
        hitter.string('OppoPercent2019', 50);
        hitter.string('HRPerFB2019', 50);
        hitter.string('HardHitPercent2019', 50);
        hitter.decimal('ExitVelo2019', 8, 1);
        hitter.decimal('FlyBallLineDriveExitVelo2019', 8, 1);
        hitter.decimal('LaunchAngle2019', 8, 1);
        hitter.string('BarrelPercent2019', 50);
        hitter.decimal('BABIP2019', 8, 3);
        hitter.decimal('WOBA2019', 8, 3);
        hitter.decimal('xWOBA2019', 8, 3);
        hitter.decimal('xBA2019', 8, 3);
        hitter.integer('AvgHRDistance2019');
        hitter.integer('WRCPlus2019');
        hitter.integer('OPSPlus2019');
        hitter.string('BBPercent2019', 50);
        hitter.string('KPercent2019', 50);
        hitter.string('ChaseRate2019', 50);
        hitter.string('ContactPercent2019', 50);
        hitter.decimal('SprintSpeed2019', 8, 1);
        hitter.integer('StolenBases2019');
        hitter.string('StolenBasePercent2019', 50);
        hitter.decimal('FWAR2019', 8, 1);
        hitter.integer('SteamerPAProjection');
        hitter.decimal('SteamerAVGProjection', 8, 3);
        hitter.decimal('SteamerOBPProjection', 8, 3);
        hitter.decimal('SteamerSLGProjection', 8, 3);
        hitter.integer('SteamerDoublesProjection', 50);
        hitter.integer('SteamerHRProjection', 50);
        hitter.integer('SteamerRunsProjection', 50);
        hitter.integer('SteamerRBIProjection', 50);
        hitter.integer('SteamerSBProjection');
        hitter.decimal('SteamerFWARProjection', 8, 1);
        hitter.integer('Games2017');
        hitter.integer('GamesStarted2017');
        hitter.decimal('InningsPitched2017', 8, 2);
        hitter.decimal('InningsPitchedPerGameStarted2017', 8, 2);
        hitter.integer('QS2017', 50);
        hitter.decimal('ERA2017', 8, 2);
        hitter.integer('ERAPlus2017');
        hitter.decimal('FIP2017', 8, 2);
        hitter.decimal('xFIP2017', 8, 2);
        hitter.decimal('SIERA2017', 8, 2);
        hitter.decimal('WHIP2017', 8, 2);
        hitter.integer('RawKs2017');
        hitter.decimal('HitsPer92017', 8, 2);
        hitter.decimal('HRsPer92017', 8, 2);
        hitter.decimal('BBPer92017', 8, 2);
        hitter.decimal('KPer92017', 8, 2);
        hitter.decimal('KDividedByBB2017', 8, 2);
        hitter.integer('Saves2017');
        hitter.string('PitcherKPercent2017', 50);
        hitter.string('PitcherBBPercent2017', 50);
        hitter.string('KMinusBBPercent2017', 50);
        hitter.decimal('PitcherBABIP2017', 8, 3);
        hitter.string('LOBPercent2017', 50);
        hitter.string('HRPerFBPercent2017', 50);
        hitter.string('PitcherGBPercent2017', 50);
        hitter.string('PitcherLDPercent2017', 50);
        hitter.string('PitcherFBPercent2017', 50);
        hitter.string('IFFBPercent2017', 50);
        hitter.string('SoftContactPercent2017', 50);
        hitter.string('MediumContactPercent2017', 50);
        hitter.string('HardContactPercent2017', 50);
        hitter.string('FirstStrikePercent2017', 50);
        hitter.decimal('PitcherExitVelo2017', 8, 1);
        hitter.decimal('PitcherFlyBallLineDriveExitVelo2017', 8, 1);
        hitter.string('PitcherBarrelPercent2017', 50);
        hitter.decimal('PitcherLaunchAngle2017', 8, 1);
        hitter.decimal('AVGFastballVelo2017', 8, 1);
        hitter.decimal('MaxFastballVelo2017', 8, 1);
        hitter.string('FourSeamFastballUsagePercent2017', 50);
        hitter.string('SinkerUsagePercent2017', 50);
        hitter.string('CutterUsagePercent2017', 50);
        hitter.string('SliderUsagePercent2017', 50);
        hitter.string('ChangeupUsagePercent2017', 50);
        hitter.string('CurveUsagePercent2017', 50);
        hitter.string('SplitterUsagePercent2017', 50);
        hitter.string('KnuckleCurveUsagePercent2017', 50);
        hitter.decimal('PitcherFWAR2017', 8, 1);
        hitter.integer('Games2018');
        hitter.integer('GamesStarted2018');
        hitter.decimal('InningsPitched2018', 8, 2);
        hitter.decimal('InningsPitchedPerGameStarted2018', 8, 2);
        hitter.integer('QS2018', 50);
        hitter.decimal('ERA2018', 8, 2);
        hitter.integer('ERAPlus2018');
        hitter.decimal('FIP2018', 8, 2);
        hitter.decimal('xFIP2018', 8, 2);
        hitter.decimal('SIERA2018', 8, 2);
        hitter.decimal('WHIP2018', 8, 2);
        hitter.integer('RawKs2018');
        hitter.decimal('HitsPer92018', 8, 2);
        hitter.decimal('HRsPer92018', 8, 2);
        hitter.decimal('BBPer92018', 8, 2);
        hitter.decimal('KPer92018', 8, 2);
        hitter.decimal('KDividedByBB2018', 8, 2);
        hitter.integer('Saves2018');
        hitter.string('PitcherKPercent2018', 50);
        hitter.string('PitcherBBPercent2018', 50);
        hitter.string('KMinusBBPercent2018', 50);
        hitter.decimal('PitcherBABIP2018', 8, 3);
        hitter.string('LOBPercent2018', 50);
        hitter.string('HRPerFBPercent2018', 50);
        hitter.string('PitcherGBPercent2018', 50);
        hitter.string('PitcherLDPercent2018', 50);
        hitter.string('PitcherFBPercent2018', 50);
        hitter.string('IFFBPercent2018', 50);
        hitter.string('SoftContactPercent2018', 50);
        hitter.string('MediumContactPercent2018', 50);
        hitter.string('HardContactPercent2018', 50);
        hitter.string('FirstStrikePercent2018', 50);
        hitter.decimal('PitcherExitVelo2018', 8, 1);
        hitter.decimal('PitcherFlyBallLineDriveExitVelo2018', 8, 1);
        hitter.string('PitcherBarrelPercent2018', 50);
        hitter.decimal('PitcherLaunchAngle2018', 8, 1);
        hitter.decimal('AVGFastballVelo2018', 8, 1);
        hitter.decimal('MaxFastballVelo2018', 8, 1);
        hitter.string('FourSeamFastballUsagePercent2018', 50);
        hitter.string('SinkerUsagePercent2018', 50);
        hitter.string('CutterUsagePercent2018', 50);
        hitter.string('SliderUsagePercent2018', 50);
        hitter.string('ChangeupUsagePercent2018', 50);
        hitter.string('CurveUsagePercent2018', 50);
        hitter.string('SplitterUsagePercent2018', 50);
        hitter.string('KnuckleCurveUsagePercent2018', 50);
        hitter.decimal('PitcherFWAR2018', 8, 1);
        hitter.integer('Games2019');
        hitter.integer('GamesStarted2019');
        hitter.decimal('InningsPitched2019', 8, 2);
        hitter.decimal('InningsPitchedPerGameStarted2019', 8, 2);
        hitter.integer('QS2019', 50);
        hitter.decimal('ERA2019', 8, 2);
        hitter.integer('ERAPlus2019');
        hitter.decimal('FIP2019', 8, 2);
        hitter.decimal('xFIP2019', 8, 2);
        hitter.decimal('SIERA2019', 8, 2);
        hitter.decimal('WHIP2019', 8, 2);
        hitter.integer('RawKs2019');
        hitter.decimal('HitsPer92019', 8, 2);
        hitter.decimal('HRsPer92019', 8, 2);
        hitter.decimal('BBPer92019', 8, 2);
        hitter.decimal('KPer92019', 8, 2);
        hitter.decimal('KDividedByBB2019', 8, 2);
        hitter.integer('Saves2019');
        hitter.string('PitcherKPercent2019', 50);
        hitter.string('PitcherBBPercent2019', 50);
        hitter.string('KMinusBBPercent2019', 50);
        hitter.decimal('PitcherBABIP2019', 8, 3);
        hitter.string('LOBPercent2019', 50);
        hitter.string('HRPerFBPercent2019', 50);
        hitter.string('PitcherGBPercent2019', 50);
        hitter.string('PitcherLDPercent2019', 50);
        hitter.string('PitcherFBPercent2019', 50);
        hitter.string('IFFBPercent2019', 50);
        hitter.string('SoftContactPercent2019', 50);
        hitter.string('MediumContactPercent2019', 50);
        hitter.string('HardContactPercent2019', 50);
        hitter.string('FirstStrikePercent2019', 50);
        hitter.decimal('PitcherExitVelo2019', 8, 1);
        hitter.decimal('PitcherFlyBallLineDriveExitVelo2019', 8, 1);
        hitter.string('PitcherBarrelPercent2019', 50);
        hitter.decimal('PitcherLaunchAngle2019', 8, 1);
        hitter.decimal('AVGFastballVelo2019', 8, 1);
        hitter.decimal('MaxFastballVelo2019', 8, 1);
        hitter.string('FourSeamFastballUsagePercent2019', 50);
        hitter.string('SinkerUsagePercent2019', 50);
        hitter.string('CutterUsagePercent2019', 50);
        hitter.string('SliderUsagePercent2019', 50);
        hitter.string('ChangeupUsagePercent2019', 50);
        hitter.string('CurveUsagePercent2019', 50);
        hitter.string('SplitterUsagePercent2019', 50);
        hitter.string('KnuckleCurveUsagePercent2019', 50);
        hitter.decimal('PitcherFWAR2019', 8, 1);
        hitter.integer('SteamerGamesProjection');
        hitter.integer('SteamerGamesStartedProjection');
        hitter.decimal('SteamerInningsPitchedProjection', 8, 1);
        hitter.decimal('SteamerQSProjection', 8, 1);
        hitter.decimal('SteamerERAProjection', 8, 2);
        hitter.decimal('SteamerFIPProjection', 8, 2);
        hitter.decimal('SteamerWHIPProjection', 8, 2);
        hitter.integer('SteamerRawKsProjection');
        hitter.decimal('SteamerKPer9Projection', 8, 2);
        hitter.integer('SteamerSavesProjection');
        hitter.decimal('PitcherSteamerFWARProjection', 8, 1);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('hitters');
};