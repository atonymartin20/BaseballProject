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
        reliefPitchers.decimal('InningsPitched2017', 8, 1);
        reliefPitchers.decimal('InningsPitchedPerGameStarted2017', 8, 1);
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
        reliefPitchers.string('PitcherKPercent2017', 50);
        reliefPitchers.string('PitcherBBPercent2017', 50);
        reliefPitchers.string('KMinusBBPercent2017', 50);
        reliefPitchers.decimal('PitcherBABIP2017', 8, 3);
        reliefPitchers.string('LOBPercent2017', 50);
        reliefPitchers.string('HRPerFBPercent2017', 50);
        reliefPitchers.string('PitcherGBPercent2017', 50);
        reliefPitchers.string('PitcherLDPercent2017', 50);
        reliefPitchers.string('PitcherFBPercent2017', 50);
        reliefPitchers.string('IFFBPercent2017', 50);
        reliefPitchers.string('SoftContactPercent2017', 50);
        reliefPitchers.string('MediumContactPercent2017', 50);
        reliefPitchers.string('HardContactPercent2017', 50);
        reliefPitchers.string('FirstStrikePercent2017', 50);
        reliefPitchers.decimal('PitcherExitVelo2017', 8, 1);
        reliefPitchers.decimal('PitcherFlyBallLineDriveExitVelo2017', 8, 1);
        reliefPitchers.string('PitcherBarrelPercent2017', 50);
        reliefPitchers.decimal('PitcherLaunchAngle2017', 8, 1);
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
        reliefPitchers.decimal('OverallXWOBA2017', 8, 3);
        reliefPitchers.string('FourSeamFastballXWOBA2017', 50);
        reliefPitchers.string('SinkerXWOBA2017', 50);
        reliefPitchers.string('CutterXWOBA2017', 50);
        reliefPitchers.string('SliderXWOBA2017', 50);
        reliefPitchers.string('ChangeupXWOBA2017', 50);
        reliefPitchers.string('CurveXWOBA2017', 50);
        reliefPitchers.string('SplitterXWOBA2017', 50);
        reliefPitchers.string('KnuckleCurveXWOBA2017', 50);
        reliefPitchers.decimal('PitcherFWAR2017', 8, 1);
        reliefPitchers.integer('Games2018');
        reliefPitchers.integer('GamesStarted2018');
        reliefPitchers.decimal('InningsPitched2018', 8, 1);
        reliefPitchers.decimal('InningsPitchedPerGameStarted2018', 8, 1);
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
        reliefPitchers.string('PitcherKPercent2018', 50);
        reliefPitchers.string('PitcherBBPercent2018', 50);
        reliefPitchers.string('KMinusBBPercent2018', 50);
        reliefPitchers.decimal('PitcherBABIP2018', 8, 3);
        reliefPitchers.string('LOBPercent2018', 50);
        reliefPitchers.string('HRPerFBPercent2018', 50);
        reliefPitchers.string('PitcherGBPercent2018', 50);
        reliefPitchers.string('PitcherLDPercent2018', 50);
        reliefPitchers.string('PitcherFBPercent2018', 50);
        reliefPitchers.string('IFFBPercent2018', 50);
        reliefPitchers.string('SoftContactPercent2018', 50);
        reliefPitchers.string('MediumContactPercent2018', 50);
        reliefPitchers.string('HardContactPercent2018', 50);
        reliefPitchers.string('FirstStrikePercent2018', 50);
        reliefPitchers.decimal('PitcherExitVelo2018', 8, 1);
        reliefPitchers.decimal('PitcherFlyBallLineDriveExitVelo2018', 8, 1);
        reliefPitchers.string('PitcherBarrelPercent2018', 50);
        reliefPitchers.decimal('PitcherLaunchAngle2018', 8, 1);
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
        reliefPitchers.decimal('OverallXWOBA2018', 8, 3);
        reliefPitchers.string('FourSeamFastballXWOBA2018', 50);
        reliefPitchers.string('SinkerXWOBA2018', 50);
        reliefPitchers.string('CutterXWOBA2018', 50);
        reliefPitchers.string('SliderXWOBA2018', 50);
        reliefPitchers.string('ChangeupXWOBA2018', 50);
        reliefPitchers.string('CurveXWOBA2018', 50);
        reliefPitchers.string('SplitterXWOBA2018', 50);
        reliefPitchers.string('KnuckleCurveXWOBA2018', 50);
        reliefPitchers.decimal('PitcherFWAR2018', 8, 1);
        reliefPitchers.integer('Games2019');
        reliefPitchers.integer('GamesStarted2019');
        reliefPitchers.decimal('InningsPitched2019', 8, 1);
        reliefPitchers.decimal('InningsPitchedPerGameStarted2019', 8, 1);
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
        reliefPitchers.string('PitcherKPercent2019', 50);
        reliefPitchers.string('PitcherBBPercent2019', 50);
        reliefPitchers.string('KMinusBBPercent2019', 50);
        reliefPitchers.decimal('PitcherBABIP2019', 8, 3);
        reliefPitchers.string('LOBPercent2019', 50);
        reliefPitchers.string('HRPerFBPercent2019', 50);
        reliefPitchers.string('PitcherGBPercent2019', 50);
        reliefPitchers.string('PitcherLDPercent2019', 50);
        reliefPitchers.string('PitcherFBPercent2019', 50);
        reliefPitchers.string('IFFBPercent2019', 50);
        reliefPitchers.string('SoftContactPercent2019', 50);
        reliefPitchers.string('MediumContactPercent2019', 50);
        reliefPitchers.string('HardContactPercent2019', 50);
        reliefPitchers.string('FirstStrikePercent2019', 50);
        reliefPitchers.decimal('PitcherExitVelo2019', 8, 1);
        reliefPitchers.decimal('PitcherFlyBallLineDriveExitVelo2019', 8, 1);
        reliefPitchers.string('PitcherBarrelPercent2019', 50);
        reliefPitchers.decimal('PitcherLaunchAngle2019', 8, 1);
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
        reliefPitchers.decimal('OverallXWOBA2019', 8, 3);
        reliefPitchers.string('FourSeamFastballXWOBA2019', 50);
        reliefPitchers.string('SinkerXWOBA2019', 50);
        reliefPitchers.string('CutterXWOBA2019', 50);
        reliefPitchers.string('SliderXWOBA2019', 50);
        reliefPitchers.string('ChangeupXWOBA2019', 50);
        reliefPitchers.string('CurveXWOBA2019', 50);
        reliefPitchers.string('SplitterXWOBA2019', 50);
        reliefPitchers.string('KnuckleCurveXWOBA2019', 50);
        reliefPitchers.decimal('PitcherFWAR2019', 8, 1);
        reliefPitchers.integer('Games2020');
        reliefPitchers.integer('GamesStarted2020');
        reliefPitchers.decimal('InningsPitched2020', 8, 1);
        reliefPitchers.decimal('InningsPitchedPerGameStarted2020', 8, 1);
        reliefPitchers.integer('QS2020', 50);
        reliefPitchers.decimal('ERA2020', 8, 2);
        reliefPitchers.integer('ERAPlus2020');
        reliefPitchers.decimal('FIP2020', 8, 2);
        reliefPitchers.decimal('xFIP2020', 8, 2);
        reliefPitchers.decimal('SIERA2020', 8, 2);
        reliefPitchers.decimal('WHIP2020', 8, 2);
        reliefPitchers.integer('RawKs2020');
        reliefPitchers.decimal('HitsPer92020', 8, 2);
        reliefPitchers.decimal('HRsPer92020', 8, 2);
        reliefPitchers.decimal('BBPer92020', 8, 2);
        reliefPitchers.decimal('KPer92020', 8, 2);
        reliefPitchers.decimal('KDividedByBB2020', 8, 2);
        reliefPitchers.integer('Saves2020');
        reliefPitchers.string('PitcherKPercent2020', 50);
        reliefPitchers.string('PitcherBBPercent2020', 50);
        reliefPitchers.string('KMinusBBPercent2020', 50);
        reliefPitchers.decimal('PitcherBABIP2020', 8, 3);
        reliefPitchers.string('LOBPercent2020', 50);
        reliefPitchers.string('HRPerFBPercent2020', 50);
        reliefPitchers.string('PitcherGBPercent2020', 50);
        reliefPitchers.string('PitcherLDPercent2020', 50);
        reliefPitchers.string('PitcherFBPercent2020', 50);
        reliefPitchers.string('IFFBPercent2020', 50);
        reliefPitchers.string('SoftContactPercent2020', 50);
        reliefPitchers.string('MediumContactPercent2020', 50);
        reliefPitchers.string('HardContactPercent2020', 50);
        reliefPitchers.string('FirstStrikePercent2020', 50);
        reliefPitchers.decimal('PitcherExitVelo2020', 8, 1);
        reliefPitchers.decimal('PitcherFlyBallLineDriveExitVelo2020', 8, 1);
        reliefPitchers.string('PitcherBarrelPercent2020', 50);
        reliefPitchers.decimal('PitcherLaunchAngle2020', 8, 1);
        reliefPitchers.decimal('AVGFastballVelo2020', 8, 1);
        reliefPitchers.decimal('MaxFastballVelo2020', 8, 1);
        reliefPitchers.string('FourSeamFastballUsagePercent2020', 50);
        reliefPitchers.string('SinkerUsagePercent2020', 50);
        reliefPitchers.string('CutterUsagePercent2020', 50);
        reliefPitchers.string('SliderUsagePercent2020', 50);
        reliefPitchers.string('ChangeupUsagePercent2020', 50);
        reliefPitchers.string('CurveUsagePercent2020', 50);
        reliefPitchers.string('SplitterUsagePercent2020', 50);
        reliefPitchers.string('KnuckleCurveUsagePercent2020', 50);
        reliefPitchers.decimal('OverallXWOBA2020', 8, 3);
        reliefPitchers.string('FourSeamFastballXWOBA2020', 50);
        reliefPitchers.string('SinkerXWOBA2020', 50);
        reliefPitchers.string('CutterXWOBA2020', 50);
        reliefPitchers.string('SliderXWOBA2020', 50);
        reliefPitchers.string('ChangeupXWOBA2020', 50);
        reliefPitchers.string('CurveXWOBA2020', 50);
        reliefPitchers.string('SplitterXWOBA2020', 50);
        reliefPitchers.string('KnuckleCurveXWOBA2020', 50);
        reliefPitchers.decimal('PitcherFWAR2020', 8, 1);
        reliefPitchers.integer('Games2021');
        reliefPitchers.integer('GamesStarted2021');
        reliefPitchers.decimal('InningsPitched2021', 8, 1);
        reliefPitchers.decimal('InningsPitchedPerGameStarted2021', 8, 1);
        reliefPitchers.integer('QS2021', 50);
        reliefPitchers.decimal('ERA2021', 8, 2);
        reliefPitchers.integer('ERAPlus2021');
        reliefPitchers.decimal('FIP2021', 8, 2);
        reliefPitchers.decimal('xFIP2021', 8, 2);
        reliefPitchers.decimal('SIERA2021', 8, 2);
        reliefPitchers.decimal('WHIP2021', 8, 2);
        reliefPitchers.integer('RawKs2021');
        reliefPitchers.decimal('HitsPer92021', 8, 2);
        reliefPitchers.decimal('HRsPer92021', 8, 2);
        reliefPitchers.decimal('BBPer92021', 8, 2);
        reliefPitchers.decimal('KPer92021', 8, 2);
        reliefPitchers.decimal('KDividedByBB2021', 8, 2);
        reliefPitchers.integer('Saves2021');
        reliefPitchers.string('PitcherKPercent2021', 50);
        reliefPitchers.string('PitcherBBPercent2021', 50);
        reliefPitchers.string('KMinusBBPercent2021', 50);
        reliefPitchers.decimal('PitcherBABIP2021', 8, 3);
        reliefPitchers.string('LOBPercent2021', 50);
        reliefPitchers.string('HRPerFBPercent2021', 50);
        reliefPitchers.string('PitcherGBPercent2021', 50);
        reliefPitchers.string('PitcherLDPercent2021', 50);
        reliefPitchers.string('PitcherFBPercent2021', 50);
        reliefPitchers.string('IFFBPercent2021', 50);
        reliefPitchers.string('SoftContactPercent2021', 50);
        reliefPitchers.string('MediumContactPercent2021', 50);
        reliefPitchers.string('HardContactPercent2021', 50);
        reliefPitchers.string('FirstStrikePercent2021', 50);
        reliefPitchers.decimal('PitcherExitVelo2021', 8, 1);
        reliefPitchers.decimal('PitcherFlyBallLineDriveExitVelo2021', 8, 1);
        reliefPitchers.string('PitcherBarrelPercent2021', 50);
        reliefPitchers.decimal('PitcherLaunchAngle2021', 8, 1);
        reliefPitchers.decimal('AVGFastballVelo2021', 8, 1);
        reliefPitchers.decimal('MaxFastballVelo2021', 8, 1);
        reliefPitchers.string('FourSeamFastballUsagePercent2021', 50);
        reliefPitchers.string('SinkerUsagePercent2021', 50);
        reliefPitchers.string('CutterUsagePercent2021', 50);
        reliefPitchers.string('SliderUsagePercent2021', 50);
        reliefPitchers.string('ChangeupUsagePercent2021', 50);
        reliefPitchers.string('CurveUsagePercent2021', 50);
        reliefPitchers.string('SplitterUsagePercent2021', 50);
        reliefPitchers.string('KnuckleCurveUsagePercent2021', 50);
        reliefPitchers.decimal('OverallXWOBA2021', 8, 3);
        reliefPitchers.string('FourSeamFastballXWOBA2021', 50);
        reliefPitchers.string('SinkerXWOBA2021', 50);
        reliefPitchers.string('CutterXWOBA2021', 50);
        reliefPitchers.string('SliderXWOBA2021', 50);
        reliefPitchers.string('ChangeupXWOBA2021', 50);
        reliefPitchers.string('CurveXWOBA2021', 50);
        reliefPitchers.string('SplitterXWOBA2021', 50);
        reliefPitchers.string('KnuckleCurveXWOBA2021', 50);
        reliefPitchers.decimal('PitcherFWAR2021', 8, 1);
        reliefPitchers.integer('Games2022');
        reliefPitchers.integer('GamesStarted2022');
        reliefPitchers.decimal('InningsPitched2022', 8, 1);
        reliefPitchers.decimal('InningsPitchedPerGameStarted2022', 8, 1);
        reliefPitchers.integer('QS2022', 50);
        reliefPitchers.decimal('ERA2022', 8, 2);
        reliefPitchers.integer('ERAPlus2022');
        reliefPitchers.decimal('FIP2022', 8, 2);
        reliefPitchers.decimal('xFIP2022', 8, 2);
        reliefPitchers.decimal('SIERA2022', 8, 2);
        reliefPitchers.decimal('WHIP2022', 8, 2);
        reliefPitchers.integer('RawKs2022');
        reliefPitchers.decimal('HitsPer92022', 8, 2);
        reliefPitchers.decimal('HRsPer92022', 8, 2);
        reliefPitchers.decimal('BBPer92022', 8, 2);
        reliefPitchers.decimal('KPer92022', 8, 2);
        reliefPitchers.decimal('KDividedByBB2022', 8, 2);
        reliefPitchers.integer('Saves2022');
        reliefPitchers.string('PitcherKPercent2022', 50);
        reliefPitchers.string('PitcherBBPercent2022', 50);
        reliefPitchers.string('KMinusBBPercent2022', 50);
        reliefPitchers.decimal('PitcherBABIP2022', 8, 3);
        reliefPitchers.string('LOBPercent2022', 50);
        reliefPitchers.string('HRPerFBPercent2022', 50);
        reliefPitchers.string('PitcherGBPercent2022', 50);
        reliefPitchers.string('PitcherLDPercent2022', 50);
        reliefPitchers.string('PitcherFBPercent2022', 50);
        reliefPitchers.string('IFFBPercent2022', 50);
        reliefPitchers.string('SoftContactPercent2022', 50);
        reliefPitchers.string('MediumContactPercent2022', 50);
        reliefPitchers.string('HardContactPercent2022', 50);
        reliefPitchers.string('FirstStrikePercent2022', 50);
        reliefPitchers.decimal('PitcherExitVelo2022', 8, 1);
        reliefPitchers.decimal('PitcherFlyBallLineDriveExitVelo2022', 8, 1);
        reliefPitchers.string('PitcherBarrelPercent2022', 50);
        reliefPitchers.decimal('PitcherLaunchAngle2022', 8, 1);
        reliefPitchers.decimal('AVGFastballVelo2022', 8, 1);
        reliefPitchers.decimal('MaxFastballVelo2022', 8, 1);
        reliefPitchers.string('FourSeamFastballUsagePercent2022', 50);
        reliefPitchers.string('SinkerUsagePercent2022', 50);
        reliefPitchers.string('CutterUsagePercent2022', 50);
        reliefPitchers.string('SliderUsagePercent2022', 50);
        reliefPitchers.string('ChangeupUsagePercent2022', 50);
        reliefPitchers.string('CurveUsagePercent2022', 50);
        reliefPitchers.string('SplitterUsagePercent2022', 50);
        reliefPitchers.string('KnuckleCurveUsagePercent2022', 50);
        reliefPitchers.decimal('OverallXWOBA2022', 8, 3);
        reliefPitchers.string('FourSeamFastballXWOBA2022', 50);
        reliefPitchers.string('SinkerXWOBA2022', 50);
        reliefPitchers.string('CutterXWOBA2022', 50);
        reliefPitchers.string('SliderXWOBA2022', 50);
        reliefPitchers.string('ChangeupXWOBA2022', 50);
        reliefPitchers.string('CurveXWOBA2022', 50);
        reliefPitchers.string('SplitterXWOBA2022', 50);
        reliefPitchers.string('KnuckleCurveXWOBA2022', 50);
        reliefPitchers.decimal('PitcherFWAR2022', 8, 1);
        reliefPitchers.integer('TheBatGamesProjection');
        reliefPitchers.integer('TheBatGamesStartedProjection');
        reliefPitchers.decimal('TheBatInningsPitchedProjection', 8, 1);
        reliefPitchers.decimal('TheBatQSProjection', 8, 1);
        reliefPitchers.decimal('TheBatERAProjection', 8, 2);
        reliefPitchers.decimal('TheBatFIPProjection', 8, 2);
        reliefPitchers.decimal('TheBatWHIPProjection', 8, 2);
        reliefPitchers.integer('TheBatRawKsProjection');
        reliefPitchers.decimal('TheBatKPer9Projection', 8, 2);
        reliefPitchers.integer('TheBatSavesProjection');
        reliefPitchers.decimal('PitcherTheBatFWARProjection', 8, 1);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('reliefPitchers');
};