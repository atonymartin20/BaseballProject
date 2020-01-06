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
        thirdBase.decimal('BA2017', 8, 1);
        thirdBase.decimal('OBP2017', 8, 1);
        thirdBase.decimal('SLG2017', 8, 1);
        thirdBase.integer('PA2017');
        thirdBase.integer('Doubles2017');
        thirdBase.integer('HR2017');
        thirdBase.integer('Runs2017');
        thirdBase.integer('RBI2017');
        thirdBase.string('LineupSlot2017', 50);
        thirdBase.string('GB%2017', 50);
        thirdBase.string('LD%2017', 50);
        thirdBase.string('FB%2017', 50);
        thirdBase.string('Pull%2017', 50);
        thirdBase.string('Center%2017', 50);
        thirdBase.string('Oppo%2017', 50);
        thirdBase.string('HR/FB%2017', 50);
        thirdBase.string('HardHit%2017', 50);
        thirdBase.decimal('ExitVelo2017', 8, 1);
        thirdBase.decimal('FlyBallLineDriveExitVelo2017', 8, 1);
        thirdBase.decimal('LaunchAngle2017', 8, 1);
        thirdBase.string('Barrel%2017', 50);
        thirdBase.decimal('BABIP2017', 8, 3);
        thirdBase.decimal('WOBA2017', 8, 3);
        thirdBase.decimal('xWOBA2017', 8, 3);
        thirdBase.decimal('xBA2017', 8, 3);
        thirdBase.integer('AvgHRDistance2017');
        thirdBase.integer('WRC+2017');
        thirdBase.integer('OPS+2017');
        thirdBase.string('BB%2017', 50);
        thirdBase.string('K%2017', 50);
        thirdBase.string('ChaseRate2017', 50);
        thirdBase.string('Contact%2017', 50);
        thirdBase.decimal('SprintSpeed2017', 8, 1);
        thirdBase.integer('StolenBases2017');
        thirdBase.string('StolenBase%2017', 4);
        thirdBase.decimal('FWAR2017', 8, 1);
        thirdBase.integer('GamesPlayed2018');
        thirdBase.decimal('BA2018', 8, 1);
        thirdBase.decimal('OBP2018', 8, 1);
        thirdBase.decimal('SLG2018', 8, 1);
        thirdBase.integer('PA2018');
        thirdBase.integer('Doubles2018');
        thirdBase.integer('HR2018');
        thirdBase.integer('Runs2018');
        thirdBase.integer('RBI2018');
        thirdBase.string('LineupSlot2018', 50);
        thirdBase.string('GB%2018', 50);
        thirdBase.string('LD%2018', 50);
        thirdBase.string('FB%2018', 50);
        thirdBase.string('Pull%2018', 50);
        thirdBase.string('Center%2018', 50);
        thirdBase.string('Oppo%2018', 50);
        thirdBase.string('HR/FB%2018', 50);
        thirdBase.string('HardHit%2018', 50);
        thirdBase.decimal('ExitVelo2018', 8, 1);
        thirdBase.decimal('FlyBallLineDriveExitVelo2018', 8, 1);
        thirdBase.decimal('LaunchAngle2018', 8, 1);
        thirdBase.string('Barrel%2018', 50);
        thirdBase.decimal('BABIP2018', 8, 3);
        thirdBase.decimal('WOBA2018', 8, 3);
        thirdBase.decimal('xWOBA2018', 8, 3);
        thirdBase.decimal('xBA2018', 8, 3);
        thirdBase.integer('AvgHRDistance2018');
        thirdBase.integer('WRC+2018');
        thirdBase.integer('OPS+2018');
        thirdBase.string('BB%2018', 50);
        thirdBase.string('K%2018', 50);
        thirdBase.string('ChaseRate2018', 50);
        thirdBase.string('Contact%2018', 50);
        thirdBase.decimal('SprintSpeed2018', 8, 1);
        thirdBase.integer('StolenBases2018');
        thirdBase.string('StolenBase%2018', 4);
        thirdBase.decimal('FWAR2018', 8, 1);
        thirdBase.integer('GamesPlayed2019');
        thirdBase.decimal('BA2019', 8, 1);
        thirdBase.decimal('OBP2019', 8, 1);
        thirdBase.decimal('SLG2019', 8, 1);
        thirdBase.integer('PA2019');
        thirdBase.integer('Doubles2019');
        thirdBase.integer('HR2019');
        thirdBase.integer('Runs2019');
        thirdBase.integer('RBI2019');
        thirdBase.string('LineupSlot2019', 50);
        thirdBase.string('GB%2019', 50);
        thirdBase.string('LD%2019', 50);
        thirdBase.string('FB%2019', 50);
        thirdBase.string('Pull%2019', 50);
        thirdBase.string('Center%2019', 50);
        thirdBase.string('Oppo%2019', 50);
        thirdBase.string('HR/FB%2019', 50);
        thirdBase.string('HardHit%2019', 50);
        thirdBase.decimal('ExitVelo2019', 8, 1);
        thirdBase.decimal('FlyBallLineDriveExitVelo2019', 8, 1);
        thirdBase.decimal('LaunchAngle2019', 8, 1);
        thirdBase.string('Barrel%2019', 50);
        thirdBase.decimal('BABIP2019', 8, 3);
        thirdBase.decimal('WOBA2019', 8, 3);
        thirdBase.decimal('xWOBA2019', 8, 3);
        thirdBase.decimal('xBA2019', 8, 3);
        thirdBase.integer('AvgHRDistance2019');
        thirdBase.integer('WRC+2019');
        thirdBase.integer('OPS+2019');
        thirdBase.string('BB%2019', 50);
        thirdBase.string('K%2019', 50);
        thirdBase.string('ChaseRate2019', 50);
        thirdBase.string('Contact%2019', 50);
        thirdBase.decimal('SprintSpeed2019', 8, 1);
        thirdBase.integer('StolenBases2019');
        thirdBase.string('StolenBase%2019', 4);
        thirdBase.decimal('FWAR2019', 8, 1);
        thirdBase.integer('SteamerPAProjection');
        thirdBase.decimal('SteamerAVGProjection', 8, 3);
        thirdBase.decimal('SteamerOBPProjection', 8, 3);
        thirdBase.decimal('SteamerSLGProjection', 8, 3);
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