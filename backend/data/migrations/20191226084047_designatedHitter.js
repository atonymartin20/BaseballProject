exports.up = function (knex, Promise) {
    return knex.schema.createTable('designatedHitter', designatedHitter => {
        designatedHitter.increments();
        designatedHitter.string('firstName', 50);
        designatedHitter.string('lastName', 50);
        designatedHitter.string('birthday', 50);
        designatedHitter.string('bats', 1);
        designatedHitter.string('throws', 1);
        designatedHitter.string('currentTeam', 50);
        designatedHitter.string('imageURL', 500);
        designatedHitter.string('primaryPosition', 50);
        designatedHitter.string('otherPositions', 50);
        designatedHitter.integer('GamesPlayed2017');
        designatedHitter.decimal('BA2017', 8, 3);
        designatedHitter.decimal('OBP2017', 8, 3);
        designatedHitter.decimal('SLG2017', 8, 3);
        designatedHitter.integer('PA2017');
        designatedHitter.integer('Doubles2017');
        designatedHitter.integer('HR2017');
        designatedHitter.integer('Runs2017');
        designatedHitter.integer('RBI2017');
        designatedHitter.string('LineupSlot2017', 50);
        designatedHitter.string('GBPercent2017', 50);
        designatedHitter.string('LDPercent2017', 50);
        designatedHitter.string('FBPercent2017', 50);
        designatedHitter.string('PullPercent2017', 50);
        designatedHitter.string('CenterPercent2017', 50);
        designatedHitter.string('OppoPercent2017', 50);
        designatedHitter.string('HRPerFB2017', 50);
        designatedHitter.string('HardHitPercent2017', 50);
        designatedHitter.decimal('ExitVelo2017', 8, 1);
        designatedHitter.decimal('FlyBallLineDriveExitVelo2017', 8, 1);
        designatedHitter.decimal('LaunchAngle2017', 8, 1);
        designatedHitter.string('BarrelPercent2017', 50);
        designatedHitter.decimal('BABIP2017', 8, 3);
        designatedHitter.decimal('WOBA2017', 8, 3);
        designatedHitter.decimal('xWOBA2017', 8, 3);
        designatedHitter.decimal('xBA2017', 8, 3);
        designatedHitter.integer('AvgHRDistance2017');
        designatedHitter.integer('WRCPlus2017');
        designatedHitter.integer('OPSPlus2017');
        designatedHitter.string('BBPercent2017', 50);
        designatedHitter.string('KPercent2017', 50);
        designatedHitter.string('ChaseRate2017', 50);
        designatedHitter.string('ContactPercent2017', 50);
        designatedHitter.decimal('SprintSpeed2017', 8, 1);
        designatedHitter.integer('StolenBases2017');
        designatedHitter.string('StolenBasePercent2017', 50);
        designatedHitter.decimal('FWAR2017', 8, 1);
        designatedHitter.integer('GamesPlayed2018');
        designatedHitter.decimal('BA2018', 8, 3);
        designatedHitter.decimal('OBP2018', 8, 3);
        designatedHitter.decimal('SLG2018', 8, 3);
        designatedHitter.integer('PA2018');
        designatedHitter.integer('Doubles2018');
        designatedHitter.integer('HR2018');
        designatedHitter.integer('Runs2018');
        designatedHitter.integer('RBI2018');
        designatedHitter.string('LineupSlot2018', 50);
        designatedHitter.string('GBPercent2018', 50);
        designatedHitter.string('LDPercent2018', 50);
        designatedHitter.string('FBPercent2018', 50);
        designatedHitter.string('PullPercent2018', 50);
        designatedHitter.string('CenterPercent2018', 50);
        designatedHitter.string('OppoPercent2018', 50);
        designatedHitter.string('HRPerFB2018', 50);
        designatedHitter.string('HardHitPercent2018', 50);
        designatedHitter.decimal('ExitVelo2018', 8, 1);
        designatedHitter.decimal('FlyBallLineDriveExitVelo2018', 8, 1);
        designatedHitter.decimal('LaunchAngle2018', 8, 1);
        designatedHitter.string('BarrelPercent2018', 50);
        designatedHitter.decimal('BABIP2018', 8, 3);
        designatedHitter.decimal('WOBA2018', 8, 3);
        designatedHitter.decimal('xWOBA2018', 8, 3);
        designatedHitter.decimal('xBA2018', 8, 3);
        designatedHitter.integer('AvgHRDistance2018');
        designatedHitter.integer('WRCPlus2018');
        designatedHitter.integer('OPSPlus2018');
        designatedHitter.string('BBPercent2018', 50);
        designatedHitter.string('KPercent2018', 50);
        designatedHitter.string('ChaseRate2018', 50);
        designatedHitter.string('ContactPercent2018', 50);
        designatedHitter.decimal('SprintSpeed2018', 8, 1);
        designatedHitter.integer('StolenBases2018');
        designatedHitter.string('StolenBasePercent2018', 50);
        designatedHitter.decimal('FWAR2018', 8, 1);
        designatedHitter.integer('GamesPlayed2019');
        designatedHitter.decimal('BA2019', 8, 3);
        designatedHitter.decimal('OBP2019', 8, 3);
        designatedHitter.decimal('SLG2019', 8, 3);
        designatedHitter.integer('PA2019');
        designatedHitter.integer('Doubles2019');
        designatedHitter.integer('HR2019');
        designatedHitter.integer('Runs2019');
        designatedHitter.integer('RBI2019');
        designatedHitter.string('LineupSlot2019', 50);
        designatedHitter.string('GBPercent2019', 50);
        designatedHitter.string('LDPercent2019', 50);
        designatedHitter.string('FBPercent2019', 50);
        designatedHitter.string('PullPercent2019', 50);
        designatedHitter.string('CenterPercent2019', 50);
        designatedHitter.string('OppoPercent2019', 50);
        designatedHitter.string('HRPerFB2019', 50);
        designatedHitter.string('HardHitPercent2019', 50);
        designatedHitter.decimal('ExitVelo2019', 8, 1);
        designatedHitter.decimal('FlyBallLineDriveExitVelo2019', 8, 1);
        designatedHitter.decimal('LaunchAngle2019', 8, 1);
        designatedHitter.string('BarrelPercent2019', 50);
        designatedHitter.decimal('BABIP2019', 8, 3);
        designatedHitter.decimal('WOBA2019', 8, 3);
        designatedHitter.decimal('xWOBA2019', 8, 3);
        designatedHitter.decimal('xBA2019', 8, 3);
        designatedHitter.integer('AvgHRDistance2019');
        designatedHitter.integer('WRCPlus2019');
        designatedHitter.integer('OPSPlus2019');
        designatedHitter.string('BBPercent2019', 50);
        designatedHitter.string('KPercent2019', 50);
        designatedHitter.string('ChaseRate2019', 50);
        designatedHitter.string('ContactPercent2019', 50);
        designatedHitter.decimal('SprintSpeed2019', 8, 1);
        designatedHitter.integer('StolenBases2019');
        designatedHitter.string('StolenBasePercent2019', 50);
        designatedHitter.decimal('FWAR2019', 8, 1);
        designatedHitter.integer('SteamerPAProjection');
        designatedHitter.decimal('SteamerAVGProjection', 8, 3);
        designatedHitter.decimal('SteamerOBPProjection', 8, 3);
        designatedHitter.decimal('SteamerSLGProjection', 8, 3);
        designatedHitter.integer('SteamerDoublesProjection', 50);
        designatedHitter.integer('SteamerHRProjection', 50);
        designatedHitter.integer('SteamerRunsProjection', 50);
        designatedHitter.integer('SteamerRBIProjection', 50);
        designatedHitter.integer('SteamerSBProjection');
        designatedHitter.decimal('SteamerFWARProjection', 8, 1);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('designatedHitter');
};