exports.up = function (knex, Promise) {
    return knex.schema.createTable('shortStop', shortStop => {
        shortStop.increments();
        shortStop.string('firstName', 50);
        shortStop.string('lastName', 50);
        shortStop.string('birthday', 50);
        shortStop.string('bats', 1);
        shortStop.string('throws', 1);
        shortStop.string('currentTeam', 50);
        shortStop.string('imageURL', 500);
        shortStop.string('primaryPosition', 50);
        shortStop.string('otherPositions', 50);
        shortStop.integer('GamesPlayed2017');
        shortStop.decimal('BA2017', 8, 3);
        shortStop.decimal('OBP2017', 8, 3);
        shortStop.decimal('SLG2017', 8, 3);
        shortStop.integer('PA2017');
        shortStop.integer('Doubles2017');
        shortStop.integer('HR2017');
        shortStop.integer('Runs2017');
        shortStop.integer('RBI2017');
        shortStop.string('LineupSlot2017', 50);
        shortStop.string('GBPercent2017', 50);
        shortStop.string('LDPercent2017', 50);
        shortStop.string('FBPercent2017', 50);
        shortStop.string('PullPercent2017', 50);
        shortStop.string('CenterPercent2017', 50);
        shortStop.string('OppoPercent2017', 50);
        shortStop.string('HRPerFB2017', 50);
        shortStop.string('HardHitPercent2017', 50);
        shortStop.decimal('ExitVelo2017', 8, 1);
        shortStop.decimal('FlyBallLineDriveExitVelo2017', 8, 1);
        shortStop.decimal('LaunchAngle2017', 8, 1);
        shortStop.string('BarrelPercent2017', 50);
        shortStop.decimal('BABIP2017', 8, 3);
        shortStop.decimal('WOBA2017', 8, 3);
        shortStop.decimal('xWOBA2017', 8, 3);
        shortStop.decimal('xBA2017', 8, 3);
        shortStop.integer('AvgHRDistance2017');
        shortStop.integer('WRCPlus2017');
        shortStop.integer('OPSPlus2017');
        shortStop.string('BBPercent2017', 50);
        shortStop.string('KPercent2017', 50);
        shortStop.string('ChaseRate2017', 50);
        shortStop.string('ContactPercent2017', 50);
        shortStop.decimal('SprintSpeed2017', 8, 1);
        shortStop.integer('StolenBases2017');
        shortStop.string('StolenBasePercent2017', 50);
        shortStop.decimal('FWAR2017', 8, 1);
        shortStop.integer('GamesPlayed2018');
        shortStop.decimal('BA2018', 8, 3);
        shortStop.decimal('OBP2018', 8, 3);
        shortStop.decimal('SLG2018', 8, 3);
        shortStop.integer('PA2018');
        shortStop.integer('Doubles2018');
        shortStop.integer('HR2018');
        shortStop.integer('Runs2018');
        shortStop.integer('RBI2018');
        shortStop.string('LineupSlot2018', 50);
        shortStop.string('GBPercent2018', 50);
        shortStop.string('LDPercent2018', 50);
        shortStop.string('FBPercent2018', 50);
        shortStop.string('PullPercent2018', 50);
        shortStop.string('CenterPercent2018', 50);
        shortStop.string('OppoPercent2018', 50);
        shortStop.string('HRPerFB2018', 50);
        shortStop.string('HardHitPercent2018', 50);
        shortStop.decimal('ExitVelo2018', 8, 1);
        shortStop.decimal('FlyBallLineDriveExitVelo2018', 8, 1);
        shortStop.decimal('LaunchAngle2018', 8, 1);
        shortStop.string('BarrelPercent2018', 50);
        shortStop.decimal('BABIP2018', 8, 3);
        shortStop.decimal('WOBA2018', 8, 3);
        shortStop.decimal('xWOBA2018', 8, 3);
        shortStop.decimal('xBA2018', 8, 3);
        shortStop.integer('AvgHRDistance2018');
        shortStop.integer('WRCPlus2018');
        shortStop.integer('OPSPlus2018');
        shortStop.string('BBPercent2018', 50);
        shortStop.string('KPercent2018', 50);
        shortStop.string('ChaseRate2018', 50);
        shortStop.string('ContactPercent2018', 50);
        shortStop.decimal('SprintSpeed2018', 8, 1);
        shortStop.integer('StolenBases2018');
        shortStop.string('StolenBasePercent2018', 50);
        shortStop.decimal('FWAR2018', 8, 1);
        shortStop.integer('GamesPlayed2019');
        shortStop.decimal('BA2019', 8, 3);
        shortStop.decimal('OBP2019', 8, 3);
        shortStop.decimal('SLG2019', 8, 3);
        shortStop.integer('PA2019');
        shortStop.integer('Doubles2019');
        shortStop.integer('HR2019');
        shortStop.integer('Runs2019');
        shortStop.integer('RBI2019');
        shortStop.string('LineupSlot2019', 50);
        shortStop.string('GBPercent2019', 50);
        shortStop.string('LDPercent2019', 50);
        shortStop.string('FBPercent2019', 50);
        shortStop.string('PullPercent2019', 50);
        shortStop.string('CenterPercent2019', 50);
        shortStop.string('OppoPercent2019', 50);
        shortStop.string('HRPerFB2019', 50);
        shortStop.string('HardHitPercent2019', 50);
        shortStop.decimal('ExitVelo2019', 8, 1);
        shortStop.decimal('FlyBallLineDriveExitVelo2019', 8, 1);
        shortStop.decimal('LaunchAngle2019', 8, 1);
        shortStop.string('BarrelPercent2019', 50);
        shortStop.decimal('BABIP2019', 8, 3);
        shortStop.decimal('WOBA2019', 8, 3);
        shortStop.decimal('xWOBA2019', 8, 3);
        shortStop.decimal('xBA2019', 8, 3);
        shortStop.integer('AvgHRDistance2019');
        shortStop.integer('WRCPlus2019');
        shortStop.integer('OPSPlus2019');
        shortStop.string('BBPercent2019', 50);
        shortStop.string('KPercent2019', 50);
        shortStop.string('ChaseRate2019', 50);
        shortStop.string('ContactPercent2019', 50);
        shortStop.decimal('SprintSpeed2019', 8, 1);
        shortStop.integer('StolenBases2019');
        shortStop.string('StolenBasePercent2019', 50);
        shortStop.decimal('FWAR2019', 8, 1);
        shortStop.integer('GamesPlayed2020');
        shortStop.decimal('BA2020', 8, 3);
        shortStop.decimal('OBP2020', 8, 3);
        shortStop.decimal('SLG2020', 8, 3);
        shortStop.integer('PA2020');
        shortStop.integer('Doubles2020');
        shortStop.integer('HR2020');
        shortStop.integer('Runs2020');
        shortStop.integer('RBI2020');
        shortStop.string('LineupSlot2020', 50);
        shortStop.string('GBPercent2020', 50);
        shortStop.string('LDPercent2020', 50);
        shortStop.string('FBPercent2020', 50);
        shortStop.string('PullPercent2020', 50);
        shortStop.string('CenterPercent2020', 50);
        shortStop.string('OppoPercent2020', 50);
        shortStop.string('HRPerFB2020', 50);
        shortStop.string('HardHitPercent2020', 50);
        shortStop.decimal('ExitVelo2020', 8, 1);
        shortStop.decimal('FlyBallLineDriveExitVelo2020', 8, 1);
        shortStop.decimal('LaunchAngle2020', 8, 1);
        shortStop.string('BarrelPercent2020', 50);
        shortStop.decimal('BABIP2020', 8, 3);
        shortStop.decimal('WOBA2020', 8, 3);
        shortStop.decimal('xWOBA2020', 8, 3);
        shortStop.decimal('xBA2020', 8, 3);
        shortStop.integer('AvgHRDistance2020');
        shortStop.integer('WRCPlus2020');
        shortStop.integer('OPSPlus2020');
        shortStop.string('BBPercent2020', 50);
        shortStop.string('KPercent2020', 50);
        shortStop.string('ChaseRate2020', 50);
        shortStop.string('ContactPercent2020', 50);
        shortStop.decimal('SprintSpeed2020', 8, 1);
        shortStop.integer('StolenBases2020');
        shortStop.string('StolenBasePercent2020', 50);
        shortStop.decimal('FWAR2020', 8, 1);
        shortStop.integer('GamesPlayed2021');
        shortStop.decimal('BA2021', 8, 3);
        shortStop.decimal('OBP2021', 8, 3);
        shortStop.decimal('SLG2021', 8, 3);
        shortStop.integer('PA2021');
        shortStop.integer('Doubles2021');
        shortStop.integer('HR2021');
        shortStop.integer('Runs2021');
        shortStop.integer('RBI2021');
        shortStop.string('LineupSlot2021', 50);
        shortStop.string('GBPercent2021', 50);
        shortStop.string('LDPercent2021', 50);
        shortStop.string('FBPercent2021', 50);
        shortStop.string('PullPercent2021', 50);
        shortStop.string('CenterPercent2021', 50);
        shortStop.string('OppoPercent2021', 50);
        shortStop.string('HRPerFB2021', 50);
        shortStop.string('HardHitPercent2021', 50);
        shortStop.decimal('ExitVelo2021', 8, 1);
        shortStop.decimal('FlyBallLineDriveExitVelo2021', 8, 1);
        shortStop.decimal('LaunchAngle2021', 8, 1);
        shortStop.string('BarrelPercent2021', 50);
        shortStop.decimal('BABIP2021', 8, 3);
        shortStop.decimal('WOBA2021', 8, 3);
        shortStop.decimal('xWOBA2021', 8, 3);
        shortStop.decimal('xBA2021', 8, 3);
        shortStop.integer('AvgHRDistance2021');
        shortStop.integer('WRCPlus2021');
        shortStop.integer('OPSPlus2021');
        shortStop.string('BBPercent2021', 50);
        shortStop.string('KPercent2021', 50);
        shortStop.string('ChaseRate2021', 50);
        shortStop.string('ContactPercent2021', 50);
        shortStop.decimal('SprintSpeed2021', 8, 1);
        shortStop.integer('StolenBases2021');
        shortStop.string('StolenBasePercent2021', 50);
        shortStop.decimal('FWAR2021', 8, 1);
        shortStop.integer('SteamerPAProjection');
        shortStop.decimal('SteamerAVGProjection', 8, 3);
        shortStop.decimal('SteamerOBPProjection', 8, 3);
        shortStop.decimal('SteamerSLGProjection', 8, 3);
        shortStop.integer('SteamerDoublesProjection', 50);
        shortStop.integer('SteamerHRProjection', 50);
        shortStop.integer('SteamerRunsProjection', 50);
        shortStop.integer('SteamerRBIProjection', 50);
        shortStop.integer('SteamerSBProjection');
        shortStop.decimal('SteamerFWARProjection', 8, 1);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('shortStop');
};