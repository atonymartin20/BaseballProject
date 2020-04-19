
exports.up = function(knex, Promise) {
    return knex.schema.createTable('twoWayPlayer', twoWayPlayer => {
        twoWayPlayer.increments();
        twoWayPlayer.string('firstName', 50);
        twoWayPlayer.string('lastName', 50);
        twoWayPlayer.string('birthday', 50);
        twoWayPlayer.string('bats', 1);
        twoWayPlayer.string('throws', 1);
        twoWayPlayer.string('currentTeam', 50);
        twoWayPlayer.string('imageURL', 500);
        twoWayPlayer.string('primaryPosition', 50);
        twoWayPlayer.string('otherPositions', 50);
        twoWayPlayer.integer('GamesPlayed2017');
        twoWayPlayer.decimal('BA2017', 8, 3);
        twoWayPlayer.decimal('OBP2017', 8, 3);
        twoWayPlayer.decimal('SLG2017', 8, 3);
        twoWayPlayer.integer('PA2017');
        twoWayPlayer.integer('Doubles2017');
        twoWayPlayer.integer('HR2017');
        twoWayPlayer.integer('Runs2017');
        twoWayPlayer.integer('RBI2017');
        twoWayPlayer.string('LineupSlot2017', 50);
        twoWayPlayer.string('GBPercent2017', 50);
        twoWayPlayer.string('LDPercent2017', 50);
        twoWayPlayer.string('FBPercent2017', 50);
        twoWayPlayer.string('PullPercent2017', 50);
        twoWayPlayer.string('CenterPercent2017', 50);
        twoWayPlayer.string('OppoPercent2017', 50);
        twoWayPlayer.string('HRPerFB2017', 50);
        twoWayPlayer.string('HardHitPercent2017', 50);
        twoWayPlayer.decimal('ExitVelo2017', 8, 1);
        twoWayPlayer.decimal('FlyBallLineDriveExitVelo2017', 8, 1);
        twoWayPlayer.decimal('LaunchAngle2017', 8, 1);
        twoWayPlayer.string('BarrelPercent2017', 50);
        twoWayPlayer.decimal('BABIP2017', 8, 3);
        twoWayPlayer.decimal('WOBA2017', 8, 3);
        twoWayPlayer.decimal('xWOBA2017', 8, 3);
        twoWayPlayer.decimal('xBA2017', 8, 3);
        twoWayPlayer.integer('AvgHRDistance2017');
        twoWayPlayer.integer('WRCPlus2017');
        twoWayPlayer.integer('OPSPlus2017');
        twoWayPlayer.string('BBPercent2017', 50);
        twoWayPlayer.string('KPercent2017', 50);
        twoWayPlayer.string('ChaseRate2017', 50);
        twoWayPlayer.string('ContactPercent2017', 50);
        twoWayPlayer.decimal('SprintSpeed2017', 8, 1);
        twoWayPlayer.integer('StolenBases2017');
        twoWayPlayer.string('StolenBasePercent2017', 50);
        twoWayPlayer.decimal('FWAR2017', 8, 1);
        twoWayPlayer.integer('GamesPlayed2018');
        twoWayPlayer.decimal('BA2018', 8, 3);
        twoWayPlayer.decimal('OBP2018', 8, 3);
        twoWayPlayer.decimal('SLG2018', 8, 3);
        twoWayPlayer.integer('PA2018');
        twoWayPlayer.integer('Doubles2018');
        twoWayPlayer.integer('HR2018');
        twoWayPlayer.integer('Runs2018');
        twoWayPlayer.integer('RBI2018');
        twoWayPlayer.string('LineupSlot2018', 50);
        twoWayPlayer.string('GBPercent2018', 50);
        twoWayPlayer.string('LDPercent2018', 50);
        twoWayPlayer.string('FBPercent2018', 50);
        twoWayPlayer.string('PullPercent2018', 50);
        twoWayPlayer.string('CenterPercent2018', 50);
        twoWayPlayer.string('OppoPercent2018', 50);
        twoWayPlayer.string('HRPerFB2018', 50);
        twoWayPlayer.string('HardHitPercent2018', 50);
        twoWayPlayer.decimal('ExitVelo2018', 8, 1);
        twoWayPlayer.decimal('FlyBallLineDriveExitVelo2018', 8, 1);
        twoWayPlayer.decimal('LaunchAngle2018', 8, 1);
        twoWayPlayer.string('BarrelPercent2018', 50);
        twoWayPlayer.decimal('BABIP2018', 8, 3);
        twoWayPlayer.decimal('WOBA2018', 8, 3);
        twoWayPlayer.decimal('xWOBA2018', 8, 3);
        twoWayPlayer.decimal('xBA2018', 8, 3);
        twoWayPlayer.integer('AvgHRDistance2018');
        twoWayPlayer.integer('WRCPlus2018');
        twoWayPlayer.integer('OPSPlus2018');
        twoWayPlayer.string('BBPercent2018', 50);
        twoWayPlayer.string('KPercent2018', 50);
        twoWayPlayer.string('ChaseRate2018', 50);
        twoWayPlayer.string('ContactPercent2018', 50);
        twoWayPlayer.decimal('SprintSpeed2018', 8, 1);
        twoWayPlayer.integer('StolenBases2018');
        twoWayPlayer.string('StolenBasePercent2018', 50);
        twoWayPlayer.decimal('FWAR2018', 8, 1);
        twoWayPlayer.integer('GamesPlayed2019');
        twoWayPlayer.decimal('BA2019', 8, 3);
        twoWayPlayer.decimal('OBP2019', 8, 3);
        twoWayPlayer.decimal('SLG2019', 8, 3);
        twoWayPlayer.integer('PA2019');
        twoWayPlayer.integer('Doubles2019');
        twoWayPlayer.integer('HR2019');
        twoWayPlayer.integer('Runs2019');
        twoWayPlayer.integer('RBI2019');
        twoWayPlayer.string('LineupSlot2019', 50);
        twoWayPlayer.string('GBPercent2019', 50);
        twoWayPlayer.string('LDPercent2019', 50);
        twoWayPlayer.string('FBPercent2019', 50);
        twoWayPlayer.string('PullPercent2019', 50);
        twoWayPlayer.string('CenterPercent2019', 50);
        twoWayPlayer.string('OppoPercent2019', 50);
        twoWayPlayer.string('HRPerFB2019', 50);
        twoWayPlayer.string('HardHitPercent2019', 50);
        twoWayPlayer.decimal('ExitVelo2019', 8, 1);
        twoWayPlayer.decimal('FlyBallLineDriveExitVelo2019', 8, 1);
        twoWayPlayer.decimal('LaunchAngle2019', 8, 1);
        twoWayPlayer.string('BarrelPercent2019', 50);
        twoWayPlayer.decimal('BABIP2019', 8, 3);
        twoWayPlayer.decimal('WOBA2019', 8, 3);
        twoWayPlayer.decimal('xWOBA2019', 8, 3);
        twoWayPlayer.decimal('xBA2019', 8, 3);
        twoWayPlayer.integer('AvgHRDistance2019');
        twoWayPlayer.integer('WRCPlus2019');
        twoWayPlayer.integer('OPSPlus2019');
        twoWayPlayer.string('BBPercent2019', 50);
        twoWayPlayer.string('KPercent2019', 50);
        twoWayPlayer.string('ChaseRate2019', 50);
        twoWayPlayer.string('ContactPercent2019', 50);
        twoWayPlayer.decimal('SprintSpeed2019', 8, 1);
        twoWayPlayer.integer('StolenBases2019');
        twoWayPlayer.string('StolenBasePercent2019', 50);
        twoWayPlayer.decimal('FWAR2019', 8, 1);
        twoWayPlayer.integer('SteamerPAProjection');
        twoWayPlayer.decimal('SteamerAVGProjection', 8, 3);
        twoWayPlayer.decimal('SteamerOBPProjection', 8, 3);
        twoWayPlayer.decimal('SteamerSLGProjection', 8, 3);
        twoWayPlayer.integer('SteamerDoublesProjection', 50);
        twoWayPlayer.integer('SteamerHRProjection', 50);
        twoWayPlayer.integer('SteamerRunsProjection', 50);
        twoWayPlayer.integer('SteamerRBIProjection', 50);
        twoWayPlayer.integer('SteamerSBProjection');
        twoWayPlayer.decimal('SteamerFWARProjection', 8, 1);
        twoWayPlayer.integer('Games2017');
        twoWayPlayer.integer('GamesStarted2017');
        twoWayPlayer.decimal('InningsPitched2017', 8, 2);
        twoWayPlayer.decimal('InningsPitchedPerGameStarted2017', 8, 2);
        twoWayPlayer.integer('QS2017', 50);
        twoWayPlayer.decimal('ERA2017', 8, 2);
        twoWayPlayer.integer('ERAPlus2017');
        twoWayPlayer.decimal('FIP2017', 8, 2);
        twoWayPlayer.decimal('xFIP2017', 8, 2);
        twoWayPlayer.decimal('SIERA2017', 8, 2);
        twoWayPlayer.decimal('WHIP2017', 8, 2);
        twoWayPlayer.integer('RawKs2017');
        twoWayPlayer.decimal('HitsPer92017', 8, 2);
        twoWayPlayer.decimal('HRsPer92017', 8, 2);
        twoWayPlayer.decimal('BBPer92017', 8, 2);
        twoWayPlayer.decimal('KPer92017', 8, 2);
        twoWayPlayer.decimal('KDividedByBB2017', 8, 2);
        twoWayPlayer.integer('Saves2017');
        twoWayPlayer.string('PitcherKPercent2017', 50);
        twoWayPlayer.string('PitcherBBPercent2017', 50);
        twoWayPlayer.string('KMinusBBPercent2017', 50);
        twoWayPlayer.decimal('PitcherBABIP2017', 8, 3);
        twoWayPlayer.string('LOBPercent2017', 50);
        twoWayPlayer.string('HRPerFBPercent2017', 50);
        twoWayPlayer.string('PitcherGBPercent2017', 50);
        twoWayPlayer.string('PitcherLDPercent2017', 50);
        twoWayPlayer.string('PitcherFBPercent2017', 50);
        twoWayPlayer.string('IFFBPercent2017', 50);
        twoWayPlayer.string('SoftContactPercent2017', 50);
        twoWayPlayer.string('MediumContactPercent2017', 50);
        twoWayPlayer.string('HardContactPercent2017', 50);
        twoWayPlayer.string('FirstStrikePercent2017', 50);
        twoWayPlayer.decimal('PitcherExitVelo2017', 8, 1);
        twoWayPlayer.decimal('PitcherFlyBallLineDriveExitVelo2017', 8, 1);
        twoWayPlayer.string('PitcherBarrelPercent2017', 50);
        twoWayPlayer.decimal('PitcherLaunchAngle2017', 8, 1);
        twoWayPlayer.decimal('AVGFastballVelo2017', 8, 1);
        twoWayPlayer.decimal('MaxFastballVelo2017', 8, 1);
        twoWayPlayer.string('FourSeamFastballUsagePercent2017', 50);
        twoWayPlayer.string('SinkerUsagePercent2017', 50);
        twoWayPlayer.string('CutterUsagePercent2017', 50);
        twoWayPlayer.string('SliderUsagePercent2017', 50);
        twoWayPlayer.string('ChangeupUsagePercent2017', 50);
        twoWayPlayer.string('CurveUsagePercent2017', 50);
        twoWayPlayer.string('SplitterUsagePercent2017', 50);
        twoWayPlayer.string('KnuckleCurveUsagePercent2017', 50);
        twoWayPlayer.decimal('PitcherFWAR2017', 8, 1);
        twoWayPlayer.integer('Games2018');
        twoWayPlayer.integer('GamesStarted2018');
        twoWayPlayer.decimal('InningsPitched2018', 8, 2);
        twoWayPlayer.decimal('InningsPitchedPerGameStarted2018', 8, 2);
        twoWayPlayer.integer('QS2018', 50);
        twoWayPlayer.decimal('ERA2018', 8, 2);
        twoWayPlayer.integer('ERAPlus2018');
        twoWayPlayer.decimal('FIP2018', 8, 2);
        twoWayPlayer.decimal('xFIP2018', 8, 2);
        twoWayPlayer.decimal('SIERA2018', 8, 2);
        twoWayPlayer.decimal('WHIP2018', 8, 2);
        twoWayPlayer.integer('RawKs2018');
        twoWayPlayer.decimal('HitsPer92018', 8, 2);
        twoWayPlayer.decimal('HRsPer92018', 8, 2);
        twoWayPlayer.decimal('BBPer92018', 8, 2);
        twoWayPlayer.decimal('KPer92018', 8, 2);
        twoWayPlayer.decimal('KDividedByBB2018', 8, 2);
        twoWayPlayer.integer('Saves2018');
        twoWayPlayer.string('PitcherKPercent2018', 50);
        twoWayPlayer.string('PitcherBBPercent2018', 50);
        twoWayPlayer.string('KMinusBBPercent2018', 50);
        twoWayPlayer.decimal('PitcherBABIP2018', 8, 3);
        twoWayPlayer.string('LOBPercent2018', 50);
        twoWayPlayer.string('HRPerFBPercent2018', 50);
        twoWayPlayer.string('PitcherGBPercent2018', 50);
        twoWayPlayer.string('PitcherLDPercent2018', 50);
        twoWayPlayer.string('PitcherFBPercent2018', 50);
        twoWayPlayer.string('IFFBPercent2018', 50);
        twoWayPlayer.string('SoftContactPercent2018', 50);
        twoWayPlayer.string('MediumContactPercent2018', 50);
        twoWayPlayer.string('HardContactPercent2018', 50);
        twoWayPlayer.string('FirstStrikePercent2018', 50);
        twoWayPlayer.decimal('PitcherExitVelo2018', 8, 1);
        twoWayPlayer.decimal('PitcherFlyBallLineDriveExitVelo2018', 8, 1);
        twoWayPlayer.string('PitcherBarrelPercent2018', 50);
        twoWayPlayer.decimal('PitcherLaunchAngle2018', 8, 1);
        twoWayPlayer.decimal('AVGFastballVelo2018', 8, 1);
        twoWayPlayer.decimal('MaxFastballVelo2018', 8, 1);
        twoWayPlayer.string('FourSeamFastballUsagePercent2018', 50);
        twoWayPlayer.string('SinkerUsagePercent2018', 50);
        twoWayPlayer.string('CutterUsagePercent2018', 50);
        twoWayPlayer.string('SliderUsagePercent2018', 50);
        twoWayPlayer.string('ChangeupUsagePercent2018', 50);
        twoWayPlayer.string('CurveUsagePercent2018', 50);
        twoWayPlayer.string('SplitterUsagePercent2018', 50);
        twoWayPlayer.string('KnuckleCurveUsagePercent2018', 50);
        twoWayPlayer.decimal('PitcherFWAR2018', 8, 1);
        twoWayPlayer.integer('Games2019');
        twoWayPlayer.integer('GamesStarted2019');
        twoWayPlayer.decimal('InningsPitched2019', 8, 2);
        twoWayPlayer.decimal('InningsPitchedPerGameStarted2019', 8, 2);
        twoWayPlayer.integer('QS2019', 50);
        twoWayPlayer.decimal('ERA2019', 8, 2);
        twoWayPlayer.integer('ERAPlus2019');
        twoWayPlayer.decimal('FIP2019', 8, 2);
        twoWayPlayer.decimal('xFIP2019', 8, 2);
        twoWayPlayer.decimal('SIERA2019', 8, 2);
        twoWayPlayer.decimal('WHIP2019', 8, 2);
        twoWayPlayer.integer('RawKs2019');
        twoWayPlayer.decimal('HitsPer92019', 8, 2);
        twoWayPlayer.decimal('HRsPer92019', 8, 2);
        twoWayPlayer.decimal('BBPer92019', 8, 2);
        twoWayPlayer.decimal('KPer92019', 8, 2);
        twoWayPlayer.decimal('KDividedByBB2019', 8, 2);
        twoWayPlayer.integer('Saves2019');
        twoWayPlayer.string('PitcherKPercent2019', 50);
        twoWayPlayer.string('PitcherBBPercent2019', 50);
        twoWayPlayer.string('KMinusBBPercent2019', 50);
        twoWayPlayer.decimal('PitcherBABIP2019', 8, 3);
        twoWayPlayer.string('LOBPercent2019', 50);
        twoWayPlayer.string('HRPerFBPercent2019', 50);
        twoWayPlayer.string('PitcherGBPercent2019', 50);
        twoWayPlayer.string('PitcherLDPercent2019', 50);
        twoWayPlayer.string('PitcherFBPercent2019', 50);
        twoWayPlayer.string('IFFBPercent2019', 50);
        twoWayPlayer.string('SoftContactPercent2019', 50);
        twoWayPlayer.string('MediumContactPercent2019', 50);
        twoWayPlayer.string('HardContactPercent2019', 50);
        twoWayPlayer.string('FirstStrikePercent2019', 50);
        twoWayPlayer.decimal('PitcherExitVelo2019', 8, 1);
        twoWayPlayer.decimal('PitcherFlyBallLineDriveExitVelo2019', 8, 1);
        twoWayPlayer.string('PitcherBarrelPercent2019', 50);
        twoWayPlayer.decimal('PitcherLaunchAngle2019', 8, 1);
        twoWayPlayer.decimal('AVGFastballVelo2019', 8, 1);
        twoWayPlayer.decimal('MaxFastballVelo2019', 8, 1);
        twoWayPlayer.string('FourSeamFastballUsagePercent2019', 50);
        twoWayPlayer.string('SinkerUsagePercent2019', 50);
        twoWayPlayer.string('CutterUsagePercent2019', 50);
        twoWayPlayer.string('SliderUsagePercent2019', 50);
        twoWayPlayer.string('ChangeupUsagePercent2019', 50);
        twoWayPlayer.string('CurveUsagePercent2019', 50);
        twoWayPlayer.string('SplitterUsagePercent2019', 50);
        twoWayPlayer.string('KnuckleCurveUsagePercent2019', 50);
        twoWayPlayer.decimal('PitcherFWAR2019', 8, 1);
        twoWayPlayer.integer('SteamerGamesProjection');
        twoWayPlayer.integer('SteamerGamesStartedProjection');
        twoWayPlayer.decimal('SteamerInningsPitchedProjection', 8, 1);
        twoWayPlayer.decimal('SteamerQSProjection', 8, 1);
        twoWayPlayer.decimal('SteamerERAProjection', 8, 2);
        twoWayPlayer.decimal('SteamerFIPProjection', 8, 2);
        twoWayPlayer.decimal('SteamerWHIPProjection', 8, 2);
        twoWayPlayer.integer('SteamerRawKsProjection');
        twoWayPlayer.decimal('SteamerKPer9Projection', 8, 2);
        twoWayPlayer.integer('SteamerSavesProjection');
        twoWayPlayer.decimal('PitcherSteamerFWARProjection', 8, 1);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('twoWayPlayer');
};
