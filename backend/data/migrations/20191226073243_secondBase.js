exports.up = function (knex, Promise) {
    return knex.schema.createTable('secondBase', secondBase => {
        secondBase.increments();
        secondBase.string('firstName', 50);
        secondBase.string('lastName', 50);
        secondBase.string('birthday', 50);
        secondBase.string('bats', 1);
        secondBase.string('throws', 1);
        secondBase.string('currentTeam', 50);
        secondBase.string('imageURL', 500);
        secondBase.string('primaryPosition', 50);
        secondBase.string('otherPositions', 50);
        secondBase.integer('GamesPlayed2017');
        secondBase.decimal('BA2017', 8, 3);
        secondBase.decimal('OBP2017', 8, 3);
        secondBase.decimal('SLG2017', 8, 3);
        secondBase.integer('PA2017');
        secondBase.integer('Doubles2017');
        secondBase.integer('HR2017');
        secondBase.integer('Runs2017');
        secondBase.integer('RBI2017');
        secondBase.string('LineupSlot2017', 50);
        secondBase.string('GBPercent2017', 50);
        secondBase.string('LDPercent2017', 50);
        secondBase.string('FBPercent2017', 50);
        secondBase.string('PullPercent2017', 50);
        secondBase.string('CenterPercent2017', 50);
        secondBase.string('OppoPercent2017', 50);
        secondBase.string('HRPerFB2017', 50);
        secondBase.string('HardHitPercent2017', 50);
        secondBase.decimal('ExitVelo2017', 8, 1);
        secondBase.decimal('FlyBallLineDriveExitVelo2017', 8, 1);
        secondBase.decimal('LaunchAngle2017', 8, 1);
        secondBase.string('BarrelPercent2017', 50);
        secondBase.decimal('BABIP2017', 8, 3);
        secondBase.decimal('WOBA2017', 8, 3);
        secondBase.decimal('xWOBA2017', 8, 3);
        secondBase.decimal('xBA2017', 8, 3);
        secondBase.integer('AvgHRDistance2017');
        secondBase.integer('WRCPlus2017');
        secondBase.integer('OPSPlus2017');
        secondBase.string('BBPercent2017', 50);
        secondBase.string('KPercent2017', 50);
        secondBase.string('ChaseRate2017', 50);
        secondBase.string('ContactPercent2017', 50);
        secondBase.decimal('SprintSpeed2017', 8, 1);
        secondBase.integer('StolenBases2017');
        secondBase.string('StolenBasePercent2017', 50);
        secondBase.decimal('FWAR2017', 8, 1);
        secondBase.integer('GamesPlayed2018');
        secondBase.decimal('BA2018', 8, 3);
        secondBase.decimal('OBP2018', 8, 3);
        secondBase.decimal('SLG2018', 8, 3);
        secondBase.integer('PA2018');
        secondBase.integer('Doubles2018');
        secondBase.integer('HR2018');
        secondBase.integer('Runs2018');
        secondBase.integer('RBI2018');
        secondBase.string('LineupSlot2018', 50);
        secondBase.string('GBPercent2018', 50);
        secondBase.string('LDPercent2018', 50);
        secondBase.string('FBPercent2018', 50);
        secondBase.string('PullPercent2018', 50);
        secondBase.string('CenterPercent2018', 50);
        secondBase.string('OppoPercent2018', 50);
        secondBase.string('HRPerFB2018', 50);
        secondBase.string('HardHitPercent2018', 50);
        secondBase.decimal('ExitVelo2018', 8, 1);
        secondBase.decimal('FlyBallLineDriveExitVelo2018', 8, 1);
        secondBase.decimal('LaunchAngle2018', 8, 1);
        secondBase.string('BarrelPercent2018', 50);
        secondBase.decimal('BABIP2018', 8, 3);
        secondBase.decimal('WOBA2018', 8, 3);
        secondBase.decimal('xWOBA2018', 8, 3);
        secondBase.decimal('xBA2018', 8, 3);
        secondBase.integer('AvgHRDistance2018');
        secondBase.integer('WRCPlus2018');
        secondBase.integer('OPSPlus2018');
        secondBase.string('BBPercent2018', 50);
        secondBase.string('KPercent2018', 50);
        secondBase.string('ChaseRate2018', 50);
        secondBase.string('ContactPercent2018', 50);
        secondBase.decimal('SprintSpeed2018', 8, 1);
        secondBase.integer('StolenBases2018');
        secondBase.string('StolenBasePercent2018', 50);
        secondBase.decimal('FWAR2018', 8, 1);
        secondBase.integer('GamesPlayed2019');
        secondBase.decimal('BA2019', 8, 3);
        secondBase.decimal('OBP2019', 8, 3);
        secondBase.decimal('SLG2019', 8, 3);
        secondBase.integer('PA2019');
        secondBase.integer('Doubles2019');
        secondBase.integer('HR2019');
        secondBase.integer('Runs2019');
        secondBase.integer('RBI2019');
        secondBase.string('LineupSlot2019', 50);
        secondBase.string('GBPercent2019', 50);
        secondBase.string('LDPercent2019', 50);
        secondBase.string('FBPercent2019', 50);
        secondBase.string('PullPercent2019', 50);
        secondBase.string('CenterPercent2019', 50);
        secondBase.string('OppoPercent2019', 50);
        secondBase.string('HRPerFB2019', 50);
        secondBase.string('HardHitPercent2019', 50);
        secondBase.decimal('ExitVelo2019', 8, 1);
        secondBase.decimal('FlyBallLineDriveExitVelo2019', 8, 1);
        secondBase.decimal('LaunchAngle2019', 8, 1);
        secondBase.string('BarrelPercent2019', 50);
        secondBase.decimal('BABIP2019', 8, 3);
        secondBase.decimal('WOBA2019', 8, 3);
        secondBase.decimal('xWOBA2019', 8, 3);
        secondBase.decimal('xBA2019', 8, 3);
        secondBase.integer('AvgHRDistance2019');
        secondBase.integer('WRCPlus2019');
        secondBase.integer('OPSPlus2019');
        secondBase.string('BBPercent2019', 50);
        secondBase.string('KPercent2019', 50);
        secondBase.string('ChaseRate2019', 50);
        secondBase.string('ContactPercent2019', 50);
        secondBase.decimal('SprintSpeed2019', 8, 1);
        secondBase.integer('StolenBases2019');
        secondBase.string('StolenBasePercent2019', 50);
        secondBase.decimal('FWAR2019', 8, 1);
        secondBase.integer('SteamerPAProjection');
        secondBase.decimal('SteamerAVGProjection', 8, 3);
        secondBase.decimal('SteamerOBPProjection', 8, 3);
        secondBase.decimal('SteamerSLGProjection', 8, 3);
        secondBase.integer('SteamerDoublesProjection', 50);
        secondBase.integer('SteamerHRProjection', 50);
        secondBase.integer('SteamerRunsProjection', 50);
        secondBase.integer('SteamerRBIProjection', 50);
        secondBase.integer('SteamerSBProjection');
        secondBase.decimal('SteamerFWARProjection', 8, 1);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('secondBase');
};