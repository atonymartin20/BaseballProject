exports.up = function (knex, Promise) {
    return knex.schema.createTable('reliefPitchers', reliefPitchers => {
        reliefPitchers.increments();
        reliefPitchers.string('firstName', 50);
        reliefPitchers.string('lastName', 50);
        reliefPitchers.string('birthday', 50);
        reliefPitchers.string('bats', 1);
        reliefPitchers.string('throws', 1);
        reliefPitchers.string('currentTeam', 50);
        reliefPitchers.string('imageURL', 500);
        reliefPitchers.string('primaryPosition', 50);
        reliefPitchers.string('otherPositions', 50);
        reliefPitchers.integer('Games2017');
        reliefPitchers.integer('GamesStarted2017');
        reliefPitchers.decimal('InningsPitched2017', 8, 2);
        reliefPitchers.decimal('InningsPitchedPerGameStarted2017', 8, 2);
        reliefPitchers.integer('QS2017', 50);
        reliefPitchers.decimal('ERA2017', 8, 2);
        reliefPitchers.integer('ERAPlus2017');
        reliefPitchers.decimal('FIP2017', 8, 2);
        reliefPitchers.decimal('xFIP2017', 8, 2);
        reliefPitchers.decimal('SIERA2017', 8, 2);
        reliefPitchers.decimal('WHIP2017', 8, 2);
        reliefPitchers.integer('RawKs2017');
        reliefPitchers.decimal('HitsPer92017', 8, 2);
        reliefPitchers.decimal('HRsPer92017', 8, 2);
        reliefPitchers.decimal('BBPer92017', 8, 2);
        reliefPitchers.decimal('KPer92017', 8, 2);
        reliefPitchers.decimal('KDividedByBB2017', 8, 2);
        reliefPitchers.integer('Saves2017');
        reliefPitchers.string('KPercent2017', 50);
        reliefPitchers.string('BBPercent2017', 50);
        reliefPitchers.string('KMinusBBPercent2017', 50);
        reliefPitchers.decimal('BABIP2017', 8, 3);
        reliefPitchers.string('LOBPercent2017', 50);
        reliefPitchers.string('HRPerFBPercent2017', 50);
        reliefPitchers.string('GBPercent2017', 50);
        reliefPitchers.string('LDPercent2017', 50);
        reliefPitchers.string('FBPercent2017', 50);
        reliefPitchers.string('IFFBPercent2017', 50);
        reliefPitchers.string('SoftContactPercent2017', 50);
        reliefPitchers.string('MediumContactPercent2017', 50);
        reliefPitchers.string('HardContactPercent2017', 50);
        reliefPitchers.string('FirstStrikePercent2017', 50);
        reliefPitchers.decimal('ExitVelo2017', 8, 1);
        reliefPitchers.decimal('FlyBallLineDriveExitVelo2017', 8, 1);
        reliefPitchers.string('BarrelPercent2017', 50);
        reliefPitchers.decimal('LaunchAngle2017', 8, 1);
        reliefPitchers.decimal('AVGFastballVelo2017', 8, 1);
        reliefPitchers.decimal('MaxFastballVelo2017', 8, 1);
        reliefPitchers.string('FourSeamFastballUsagePercent2017', 50);
        reliefPitchers.string('SinkerUsagePercent2017', 50);
        reliefPitchers.string('CutterUsagePercent2017', 50);
        reliefPitchers.string('SliderUsagePercent2017', 50);
        reliefPitchers.string('ChangeupUsagePercent2017', 50);
        reliefPitchers.string('CurveUsagePercent2017', 50);
        reliefPitchers.string('SplitterUsagePercent2017', 50);
        reliefPitchers.string('KnuckleCurveUsagePercent2017', 50);
        reliefPitchers.decimal('FWAR2017', 8, 1);
        reliefPitchers.integer('Games2018');
        reliefPitchers.integer('GamesStarted2018');
        reliefPitchers.decimal('InningsPitched2018', 8, 2);
        reliefPitchers.decimal('InningsPitchedPerGameStarted2018', 8, 2);
        reliefPitchers.integer('QS2018', 50);
        reliefPitchers.decimal('ERA2018', 8, 2);
        reliefPitchers.integer('ERAPlus2018');
        reliefPitchers.decimal('FIP2018', 8, 2);
        reliefPitchers.decimal('xFIP2018', 8, 2);
        reliefPitchers.decimal('SIERA2018', 8, 2);
        reliefPitchers.decimal('WHIP2018', 8, 2);
        reliefPitchers.integer('RawKs2018');
        reliefPitchers.decimal('HitsPer92018', 8, 2);
        reliefPitchers.decimal('HRsPer92018', 8, 2);
        reliefPitchers.decimal('BBPer92018', 8, 2);
        reliefPitchers.decimal('KPer92018', 8, 2);
        reliefPitchers.decimal('KDividedByBB2018', 8, 2);
        reliefPitchers.integer('Saves2018');
        reliefPitchers.string('KPercent2018', 50);
        reliefPitchers.string('BBPercent2018', 50);
        reliefPitchers.string('KMinusBBPercent2018', 50);
        reliefPitchers.decimal('BABIP2018', 8, 3);
        reliefPitchers.string('LOBPercent2018', 50);
        reliefPitchers.string('HRPerFBPercent2018', 50);
        reliefPitchers.string('GBPercent2018', 50);
        reliefPitchers.string('LDPercent2018', 50);
        reliefPitchers.string('FBPercent2018', 50);
        reliefPitchers.string('IFFBPercent2018', 50);
        reliefPitchers.string('SoftContactPercent2018', 50);
        reliefPitchers.string('MediumContactPercent2018', 50);
        reliefPitchers.string('HardContactPercent2018', 50);
        reliefPitchers.string('FirstStrikePercent2018', 50);
        reliefPitchers.decimal('ExitVelo2018', 8, 1);
        reliefPitchers.decimal('FlyBallLineDriveExitVelo2018', 8, 1);
        reliefPitchers.string('BarrelPercent2018', 50);
        reliefPitchers.decimal('LaunchAngle2018', 8, 1);
        reliefPitchers.decimal('AVGFastballVelo2018', 8, 1);
        reliefPitchers.decimal('MaxFastballVelo2018', 8, 1);
        reliefPitchers.string('FourSeamFastballUsagePercent2018', 50);
        reliefPitchers.string('SinkerUsagePercent2018', 50);
        reliefPitchers.string('CutterUsagePercent2018', 50);
        reliefPitchers.string('SliderUsagePercent2018', 50);
        reliefPitchers.string('ChangeupUsagePercent2018', 50);
        reliefPitchers.string('CurveUsagePercent2018', 50);
        reliefPitchers.string('SplitterUsagePercent2018', 50);
        reliefPitchers.string('KnuckleCurveUsagePercent2018', 50);
        reliefPitchers.decimal('FWAR2018', 8, 1);
        reliefPitchers.integer('Games2019');
        reliefPitchers.integer('GamesStarted2019');
        reliefPitchers.decimal('InningsPitched2019', 8, 2);
        reliefPitchers.decimal('InningsPitchedPerGameStarted2019', 8, 2);
        reliefPitchers.integer('QS2019', 50);
        reliefPitchers.decimal('ERA2019', 8, 2);
        reliefPitchers.integer('ERAPlus2019');
        reliefPitchers.decimal('FIP2019', 8, 2);
        reliefPitchers.decimal('xFIP2019', 8, 2);
        reliefPitchers.decimal('SIERA2019', 8, 2);
        reliefPitchers.decimal('WHIP2019', 8, 2);
        reliefPitchers.integer('RawKs2019');
        reliefPitchers.decimal('HitsPer92019', 8, 2);
        reliefPitchers.decimal('HRsPer92019', 8, 2);
        reliefPitchers.decimal('BBPer92019', 8, 2);
        reliefPitchers.decimal('KPer92019', 8, 2);
        reliefPitchers.decimal('KDividedByBB2019', 8, 2);
        reliefPitchers.integer('Saves2019');
        reliefPitchers.string('KPercent2019', 50);
        reliefPitchers.string('BBPercent2019', 50);
        reliefPitchers.string('KMinusBBPercent2019', 50);
        reliefPitchers.decimal('BABIP2019', 8, 3);
        reliefPitchers.string('LOBPercent2019', 50);
        reliefPitchers.string('HRPerFBPercent2019', 50);
        reliefPitchers.string('GBPercent2019', 50);
        reliefPitchers.string('LDPercent2019', 50);
        reliefPitchers.string('FBPercent2019', 50);
        reliefPitchers.string('IFFBPercent2019', 50);
        reliefPitchers.string('SoftContactPercent2019', 50);
        reliefPitchers.string('MediumContactPercent2019', 50);
        reliefPitchers.string('HardContactPercent2019', 50);
        reliefPitchers.string('FirstStrikePercent2019', 50);
        reliefPitchers.decimal('ExitVelo2019', 8, 1);
        reliefPitchers.decimal('FlyBallLineDriveExitVelo2019', 8, 1);
        reliefPitchers.string('BarrelPercent2019', 50);
        reliefPitchers.decimal('LaunchAngle2019', 8, 1);
        reliefPitchers.decimal('AVGFastballVelo2019', 8, 1);
        reliefPitchers.decimal('MaxFastballVelo2019', 8, 1);
        reliefPitchers.string('FourSeamFastballUsagePercent2019', 50);
        reliefPitchers.string('SinkerUsagePercent2019', 50);
        reliefPitchers.string('CutterUsagePercent2019', 50);
        reliefPitchers.string('SliderUsagePercent2019', 50);
        reliefPitchers.string('ChangeupUsagePercent2019', 50);
        reliefPitchers.string('CurveUsagePercent2019', 50);
        reliefPitchers.string('SplitterUsagePercent2019', 50);
        reliefPitchers.string('KnuckleCurveUsagePercent2019', 50);
        reliefPitchers.decimal('FWAR2019', 8, 1);
        reliefPitchers.integer('SteamerGamesProjection');
        reliefPitchers.integer('SteamerGamesStartedProjection');
        reliefPitchers.decimal('SteamerInningsPitchedProjection', 8, 2);
        reliefPitchers.decimal('SteamerERAProjection', 8, 2);
        reliefPitchers.decimal('SteamerFIPProjection', 8, 2);
        reliefPitchers.decimal('SteamerWHIPProjection', 8, 2);
        reliefPitchers.integer('SteamerRawKsProjection');
        reliefPitchers.decimal('SteamerKPer9Projection', 8, 2);
        reliefPitchers.integer('SteamerSavesProjection');
        reliefPitchers.decimal('SteamerFWARProjection', 8, 1);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('reliefPitchers');
};