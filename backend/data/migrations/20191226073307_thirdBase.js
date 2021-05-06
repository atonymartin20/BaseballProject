exports.up = function (knex, Promise) {
    return knex.schema.createTable('thirdBase', thirdBase => {
        thirdBase.increments();
        thirdBase.string('firstName', 50);
        thirdBase.string('lastName', 50);
        thirdBase.string('birthday', 50);
        thirdBase.string('bats', 1);
        thirdBase.string('throws', 1);
        thirdBase.string('currentTeam', 50);
        thirdBase.string('imageURL', 500);
        thirdBase.string('primaryPosition', 50);
        thirdBase.string('otherPositions', 50);
        thirdBase.integer('GamesPlayed2017');
        thirdBase.decimal('BA2017', 8, 3);
        thirdBase.decimal('OBP2017', 8, 3);
        thirdBase.decimal('SLG2017', 8, 3);
        thirdBase.integer('PA2017');
        thirdBase.integer('Doubles2017');
        thirdBase.integer('HR2017');
        thirdBase.integer('Runs2017');
        thirdBase.integer('RBI2017');
        thirdBase.string('LineupSlot2017', 50);
        thirdBase.string('GBPercent2017', 50);
        thirdBase.string('LDPercent2017', 50);
        thirdBase.string('FBPercent2017', 50);
        thirdBase.string('PullPercent2017', 50);
        thirdBase.string('CenterPercent2017', 50);
        thirdBase.string('OppoPercent2017', 50);
        thirdBase.string('HRPerFB2017', 50);
        thirdBase.string('HardHitPercent2017', 50);
        thirdBase.decimal('ExitVelo2017', 8, 1);
        thirdBase.decimal('FlyBallLineDriveExitVelo2017', 8, 1);
        thirdBase.decimal('LaunchAngle2017', 8, 1);
        thirdBase.string('BarrelPercent2017', 50);
        thirdBase.decimal('BABIP2017', 8, 3);
        thirdBase.decimal('WOBA2017', 8, 3);
        thirdBase.decimal('xWOBA2017', 8, 3);
        thirdBase.decimal('xBA2017', 8, 3);
        thirdBase.integer('AvgHRDistance2017');
        thirdBase.integer('WRCPlus2017');
        thirdBase.integer('OPSPlus2017');
        thirdBase.string('BBPercent2017', 50);
        thirdBase.string('KPercent2017', 50);
        thirdBase.string('ChaseRate2017', 50);
        thirdBase.string('ContactPercent2017', 50);
        thirdBase.decimal('SprintSpeed2017', 8, 1);
        thirdBase.integer('StolenBases2017');
        thirdBase.string('StolenBasePercent2017', 50);
        thirdBase.decimal('FWAR2017', 8, 1);
        thirdBase.integer('GamesPlayed2018');
        thirdBase.decimal('BA2018', 8, 3);
        thirdBase.decimal('OBP2018', 8, 3);
        thirdBase.decimal('SLG2018', 8, 3);
        thirdBase.integer('PA2018');
        thirdBase.integer('Doubles2018');
        thirdBase.integer('HR2018');
        thirdBase.integer('Runs2018');
        thirdBase.integer('RBI2018');
        thirdBase.string('LineupSlot2018', 50);
        thirdBase.string('GBPercent2018', 50);
        thirdBase.string('LDPercent2018', 50);
        thirdBase.string('FBPercent2018', 50);
        thirdBase.string('PullPercent2018', 50);
        thirdBase.string('CenterPercent2018', 50);
        thirdBase.string('OppoPercent2018', 50);
        thirdBase.string('HRPerFB2018', 50);
        thirdBase.string('HardHitPercent2018', 50);
        thirdBase.decimal('ExitVelo2018', 8, 1);
        thirdBase.decimal('FlyBallLineDriveExitVelo2018', 8, 1);
        thirdBase.decimal('LaunchAngle2018', 8, 1);
        thirdBase.string('BarrelPercent2018', 50);
        thirdBase.decimal('BABIP2018', 8, 3);
        thirdBase.decimal('WOBA2018', 8, 3);
        thirdBase.decimal('xWOBA2018', 8, 3);
        thirdBase.decimal('xBA2018', 8, 3);
        thirdBase.integer('AvgHRDistance2018');
        thirdBase.integer('WRCPlus2018');
        thirdBase.integer('OPSPlus2018');
        thirdBase.string('BBPercent2018', 50);
        thirdBase.string('KPercent2018', 50);
        thirdBase.string('ChaseRate2018', 50);
        thirdBase.string('ContactPercent2018', 50);
        thirdBase.decimal('SprintSpeed2018', 8, 1);
        thirdBase.integer('StolenBases2018');
        thirdBase.string('StolenBasePercent2018', 50);
        thirdBase.decimal('FWAR2018', 8, 1);
        thirdBase.integer('GamesPlayed2019');
        thirdBase.decimal('BA2019', 8, 3);
        thirdBase.decimal('OBP2019', 8, 3);
        thirdBase.decimal('SLG2019', 8, 3);
        thirdBase.integer('PA2019');
        thirdBase.integer('Doubles2019');
        thirdBase.integer('HR2019');
        thirdBase.integer('Runs2019');
        thirdBase.integer('RBI2019');
        thirdBase.string('LineupSlot2019', 50);
        thirdBase.string('GBPercent2019', 50);
        thirdBase.string('LDPercent2019', 50);
        thirdBase.string('FBPercent2019', 50);
        thirdBase.string('PullPercent2019', 50);
        thirdBase.string('CenterPercent2019', 50);
        thirdBase.string('OppoPercent2019', 50);
        thirdBase.string('HRPerFB2019', 50);
        thirdBase.string('HardHitPercent2019', 50);
        thirdBase.decimal('ExitVelo2019', 8, 1);
        thirdBase.decimal('FlyBallLineDriveExitVelo2019', 8, 1);
        thirdBase.decimal('LaunchAngle2019', 8, 1);
        thirdBase.string('BarrelPercent2019', 50);
        thirdBase.decimal('BABIP2019', 8, 3);
        thirdBase.decimal('WOBA2019', 8, 3);
        thirdBase.decimal('xWOBA2019', 8, 3);
        thirdBase.decimal('xBA2019', 8, 3);
        thirdBase.integer('AvgHRDistance2019');
        thirdBase.integer('WRCPlus2019');
        thirdBase.integer('OPSPlus2019');
        thirdBase.string('BBPercent2019', 50);
        thirdBase.string('KPercent2019', 50);
        thirdBase.string('ChaseRate2019', 50);
        thirdBase.string('ContactPercent2019', 50);
        thirdBase.decimal('SprintSpeed2019', 8, 1);
        thirdBase.integer('StolenBases2019');
        thirdBase.string('StolenBasePercent2019', 50);
        thirdBase.decimal('FWAR2019', 8, 1);
        thirdBase.integer('GamesPlayed2020');
        thirdBase.decimal('BA2020', 8, 3);
        thirdBase.decimal('OBP2020', 8, 3);
        thirdBase.decimal('SLG2020', 8, 3);
        thirdBase.integer('PA2020');
        thirdBase.integer('Doubles2020');
        thirdBase.integer('HR2020');
        thirdBase.integer('Runs2020');
        thirdBase.integer('RBI2020');
        thirdBase.string('LineupSlot2020', 50);
        thirdBase.string('GBPercent2020', 50);
        thirdBase.string('LDPercent2020', 50);
        thirdBase.string('FBPercent2020', 50);
        thirdBase.string('PullPercent2020', 50);
        thirdBase.string('CenterPercent2020', 50);
        thirdBase.string('OppoPercent2020', 50);
        thirdBase.string('HRPerFB2020', 50);
        thirdBase.string('HardHitPercent2020', 50);
        thirdBase.decimal('ExitVelo2020', 8, 1);
        thirdBase.decimal('FlyBallLineDriveExitVelo2020', 8, 1);
        thirdBase.decimal('LaunchAngle2020', 8, 1);
        thirdBase.string('BarrelPercent2020', 50);
        thirdBase.decimal('BABIP2020', 8, 3);
        thirdBase.decimal('WOBA2020', 8, 3);
        thirdBase.decimal('xWOBA2020', 8, 3);
        thirdBase.decimal('xBA2020', 8, 3);
        thirdBase.integer('AvgHRDistance2020');
        thirdBase.integer('WRCPlus2020');
        thirdBase.integer('OPSPlus2020');
        thirdBase.string('BBPercent2020', 50);
        thirdBase.string('KPercent2020', 50);
        thirdBase.string('ChaseRate2020', 50);
        thirdBase.string('ContactPercent2020', 50);
        thirdBase.decimal('SprintSpeed2020', 8, 1);
        thirdBase.integer('StolenBases2020');
        thirdBase.string('StolenBasePercent2020', 50);
        thirdBase.decimal('FWAR2020', 8, 1);
        thirdBase.integer('GamesPlayed2021');
        thirdBase.decimal('BA2021', 8, 3);
        thirdBase.decimal('OBP2021', 8, 3);
        thirdBase.decimal('SLG2021', 8, 3);
        thirdBase.integer('PA2021');
        thirdBase.integer('Doubles2021');
        thirdBase.integer('HR2021');
        thirdBase.integer('Runs2021');
        thirdBase.integer('RBI2021');
        thirdBase.string('LineupSlot2021', 50);
        thirdBase.string('GBPercent2021', 50);
        thirdBase.string('LDPercent2021', 50);
        thirdBase.string('FBPercent2021', 50);
        thirdBase.string('PullPercent2021', 50);
        thirdBase.string('CenterPercent2021', 50);
        thirdBase.string('OppoPercent2021', 50);
        thirdBase.string('HRPerFB2021', 50);
        thirdBase.string('HardHitPercent2021', 50);
        thirdBase.decimal('ExitVelo2021', 8, 1);
        thirdBase.decimal('FlyBallLineDriveExitVelo2021', 8, 1);
        thirdBase.decimal('LaunchAngle2021', 8, 1);
        thirdBase.string('BarrelPercent2021', 50);
        thirdBase.decimal('BABIP2021', 8, 3);
        thirdBase.decimal('WOBA2021', 8, 3);
        thirdBase.decimal('xWOBA2021', 8, 3);
        thirdBase.decimal('xBA2021', 8, 3);
        thirdBase.integer('AvgHRDistance2021');
        thirdBase.integer('WRCPlus2021');
        thirdBase.integer('OPSPlus2021');
        thirdBase.string('BBPercent2021', 50);
        thirdBase.string('KPercent2021', 50);
        thirdBase.string('ChaseRate2021', 50);
        thirdBase.string('ContactPercent2021', 50);
        thirdBase.decimal('SprintSpeed2021', 8, 1);
        thirdBase.integer('StolenBases2021');
        thirdBase.string('StolenBasePercent2021', 50);
        thirdBase.decimal('FWAR2021', 8, 1);
        thirdBase.integer('SteamerPAProjection');
        thirdBase.decimal('SteamerAVGProjection', 8, 3);
        thirdBase.decimal('SteamerOBPProjection', 8, 3);
        thirdBase.decimal('SteamerSLGProjection', 8, 3);
        thirdBase.integer('SteamerDoublesProjection', 50);
        thirdBase.integer('SteamerHRProjection', 50);
        thirdBase.integer('SteamerRunsProjection', 50);
        thirdBase.integer('SteamerRBIProjection', 50);
        thirdBase.integer('SteamerSBProjection');
        thirdBase.decimal('SteamerFWARProjection', 8, 1);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('thirdBase');
};