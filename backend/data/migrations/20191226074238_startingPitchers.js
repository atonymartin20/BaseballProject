exports.up = function (knex, Promise) {
    return knex.schema.createTable('startingPitchers', startingPitchers => {
        startingPitchers.increments();
        startingPitchers.string('firstName', 50);
        startingPitchers.string('lastName', 50);
        startingPitchers.string('birthday', 50);
        startingPitchers.string('bats', 1);
        startingPitchers.string('throws', 1);
        startingPitchers.string('currentTeam', 50);
        startingPitchers.string('imageURL', 500);
        startingPitchers.string('primaryPosition', 50);
        startingPitchers.string('otherPositions', 50);
        startingPitchers.integer('Games2017');
        startingPitchers.integer('GamesStarted2017');
        startingPitchers.decimal('InningsPitched2017', 8, 2);
        startingPitchers.decimal('InningsPitchedPerGameStarted2017', 8, 2);
        startingPitchers.integer('QS2017', 50);
        startingPitchers.decimal('ERA2017', 8, 2);
        startingPitchers.integer('ERAPlus2017');
        startingPitchers.decimal('FIP2017', 8, 2);
        startingPitchers.decimal('xFIP2017', 8, 2);
        startingPitchers.decimal('SIERA2017', 8, 2);
        startingPitchers.decimal('WHIP2017', 8, 2);
        startingPitchers.integer('RawKs2017');
        startingPitchers.decimal('HitsPer92017', 8, 2);
        startingPitchers.decimal('HRsPer92017', 8, 2);
        startingPitchers.decimal('BBPer92017', 8, 2);
        startingPitchers.decimal('KPer92017', 8, 2);
        startingPitchers.decimal('KDividedByBB2017', 8, 2);
        startingPitchers.integer('Saves2017');
        startingPitchers.string('PitcherKPercent2017', 50);
        startingPitchers.string('PitcherBBPercent2017', 50);
        startingPitchers.string('KMinusBBPercent2017', 50);
        startingPitchers.decimal('PitcherBABIP2017', 8, 3);
        startingPitchers.string('LOBPercent2017', 50);
        startingPitchers.string('HRPerFBPercent2017', 50);
        startingPitchers.string('PitcherGBPercent2017', 50);
        startingPitchers.string('PitcherLDPercent2017', 50);
        startingPitchers.string('PitcherFBPercent2017', 50);
        startingPitchers.string('IFFBPercent2017', 50);
        startingPitchers.string('SoftContactPercent2017', 50);
        startingPitchers.string('MediumContactPercent2017', 50);
        startingPitchers.string('HardContactPercent2017', 50);
        startingPitchers.string('FirstStrikePercent2017', 50);
        startingPitchers.decimal('PitcherExitVelo2017', 8, 1);
        startingPitchers.decimal('PitcherFlyBallLineDriveExitVelo2017', 8, 1);
        startingPitchers.string('PitcherBarrelPercent2017', 50);
        startingPitchers.decimal('PitcherLaunchAngle2017', 8, 1);
        startingPitchers.decimal('AVGFastballVelo2017', 8, 1);
        startingPitchers.decimal('MaxFastballVelo2017', 8, 1);
        startingPitchers.string('FourSeamFastballUsagePercent2017', 50);
        startingPitchers.string('SinkerUsagePercent2017', 50);
        startingPitchers.string('CutterUsagePercent2017', 50);
        startingPitchers.string('SliderUsagePercent2017', 50);
        startingPitchers.string('ChangeupUsagePercent2017', 50);
        startingPitchers.string('CurveUsagePercent2017', 50);
        startingPitchers.string('SplitterUsagePercent2017', 50);
        startingPitchers.string('KnuckleCurveUsagePercent2017', 50);
        startingPitchers.decimal('PitcherFWAR2017', 8, 1);
        startingPitchers.integer('Games2018');
        startingPitchers.integer('GamesStarted2018');
        startingPitchers.decimal('InningsPitched2018', 8, 2);
        startingPitchers.decimal('InningsPitchedPerGameStarted2018', 8, 2);
        startingPitchers.integer('QS2018', 50);
        startingPitchers.decimal('ERA2018', 8, 2);
        startingPitchers.integer('ERAPlus2018');
        startingPitchers.decimal('FIP2018', 8, 2);
        startingPitchers.decimal('xFIP2018', 8, 2);
        startingPitchers.decimal('SIERA2018', 8, 2);
        startingPitchers.decimal('WHIP2018', 8, 2);
        startingPitchers.integer('RawKs2018');
        startingPitchers.decimal('HitsPer92018', 8, 2);
        startingPitchers.decimal('HRsPer92018', 8, 2);
        startingPitchers.decimal('BBPer92018', 8, 2);
        startingPitchers.decimal('KPer92018', 8, 2);
        startingPitchers.decimal('KDividedByBB2018', 8, 2);
        startingPitchers.integer('Saves2018');
        startingPitchers.string('PitcherKPercent2018', 50);
        startingPitchers.string('PitcherBBPercent2018', 50);
        startingPitchers.string('KMinusBBPercent2018', 50);
        startingPitchers.decimal('PitcherBABIP2018', 8, 3);
        startingPitchers.string('LOBPercent2018', 50);
        startingPitchers.string('HRPerFBPercent2018', 50);
        startingPitchers.string('PitcherGBPercent2018', 50);
        startingPitchers.string('PitcherLDPercent2018', 50);
        startingPitchers.string('PitcherFBPercent2018', 50);
        startingPitchers.string('IFFBPercent2018', 50);
        startingPitchers.string('SoftContactPercent2018', 50);
        startingPitchers.string('MediumContactPercent2018', 50);
        startingPitchers.string('HardContactPercent2018', 50);
        startingPitchers.string('FirstStrikePercent2018', 50);
        startingPitchers.decimal('PitcherExitVelo2018', 8, 1);
        startingPitchers.decimal('PitcherFlyBallLineDriveExitVelo2018', 8, 1);
        startingPitchers.string('PitcherBarrelPercent2018', 50);
        startingPitchers.decimal('PitcherLaunchAngle2018', 8, 1);
        startingPitchers.decimal('AVGFastballVelo2018', 8, 1);
        startingPitchers.decimal('MaxFastballVelo2018', 8, 1);
        startingPitchers.string('FourSeamFastballUsagePercent2018', 50);
        startingPitchers.string('SinkerUsagePercent2018', 50);
        startingPitchers.string('CutterUsagePercent2018', 50);
        startingPitchers.string('SliderUsagePercent2018', 50);
        startingPitchers.string('ChangeupUsagePercent2018', 50);
        startingPitchers.string('CurveUsagePercent2018', 50);
        startingPitchers.string('SplitterUsagePercent2018', 50);
        startingPitchers.string('KnuckleCurveUsagePercent2018', 50);
        startingPitchers.decimal('PitcherFWAR2018', 8, 1);
        startingPitchers.integer('Games2019');
        startingPitchers.integer('GamesStarted2019');
        startingPitchers.decimal('InningsPitched2019', 8, 2);
        startingPitchers.decimal('InningsPitchedPerGameStarted2019', 8, 2);
        startingPitchers.integer('QS2019', 50);
        startingPitchers.decimal('ERA2019', 8, 2);
        startingPitchers.integer('ERAPlus2019');
        startingPitchers.decimal('FIP2019', 8, 2);
        startingPitchers.decimal('xFIP2019', 8, 2);
        startingPitchers.decimal('SIERA2019', 8, 2);
        startingPitchers.decimal('WHIP2019', 8, 2);
        startingPitchers.integer('RawKs2019');
        startingPitchers.decimal('HitsPer92019', 8, 2);
        startingPitchers.decimal('HRsPer92019', 8, 2);
        startingPitchers.decimal('BBPer92019', 8, 2);
        startingPitchers.decimal('KPer92019', 8, 2);
        startingPitchers.decimal('KDividedByBB2019', 8, 2);
        startingPitchers.integer('Saves2019');
        startingPitchers.string('PitcherKPercent2019', 50);
        startingPitchers.string('PitcherBBPercent2019', 50);
        startingPitchers.string('KMinusBBPercent2019', 50);
        startingPitchers.decimal('PitcherBABIP2019', 8, 3);
        startingPitchers.string('LOBPercent2019', 50);
        startingPitchers.string('HRPerFBPercent2019', 50);
        startingPitchers.string('PitcherGBPercent2019', 50);
        startingPitchers.string('PitcherLDPercent2019', 50);
        startingPitchers.string('PitcherFBPercent2019', 50);
        startingPitchers.string('IFFBPercent2019', 50);
        startingPitchers.string('SoftContactPercent2019', 50);
        startingPitchers.string('MediumContactPercent2019', 50);
        startingPitchers.string('HardContactPercent2019', 50);
        startingPitchers.string('FirstStrikePercent2019', 50);
        startingPitchers.decimal('PitcherExitVelo2019', 8, 1);
        startingPitchers.decimal('PitcherFlyBallLineDriveExitVelo2019', 8, 1);
        startingPitchers.string('PitcherBarrelPercent2019', 50);
        startingPitchers.decimal('PitcherLaunchAngle2019', 8, 1);
        startingPitchers.decimal('AVGFastballVelo2019', 8, 1);
        startingPitchers.decimal('MaxFastballVelo2019', 8, 1);
        startingPitchers.string('FourSeamFastballUsagePercent2019', 50);
        startingPitchers.string('SinkerUsagePercent2019', 50);
        startingPitchers.string('CutterUsagePercent2019', 50);
        startingPitchers.string('SliderUsagePercent2019', 50);
        startingPitchers.string('ChangeupUsagePercent2019', 50);
        startingPitchers.string('CurveUsagePercent2019', 50);
        startingPitchers.string('SplitterUsagePercent2019', 50);
        startingPitchers.string('KnuckleCurveUsagePercent2019', 50);
        startingPitchers.decimal('PitcherFWAR2019', 8, 1);
        startingPitchers.integer('SteamerGamesProjection');
        startingPitchers.integer('SteamerGamesStartedProjection');
        startingPitchers.decimal('SteamerInningsPitchedProjection', 8, 1);
        startingPitchers.decimal('SteamerQSProjection', 8, 1);
        startingPitchers.decimal('SteamerERAProjection', 8, 2);
        startingPitchers.decimal('SteamerFIPProjection', 8, 2);
         startingPitchers.decimal('SteamerWHIPProjection', 8, 2);
        startingPitchers.integer('SteamerRawKsProjection');
        startingPitchers.decimal('SteamerKPer9Projection', 8, 2);
        startingPitchers.integer('SteamerSavesProjection');
        startingPitchers.decimal('PitcherSteamerFWARProjection', 8, 1);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('startingPitchers');
};