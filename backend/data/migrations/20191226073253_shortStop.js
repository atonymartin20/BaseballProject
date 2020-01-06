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
        shortStop.decimal('BA2017', 8, 1);
        shortStop.decimal('OBP2017', 8, 1);
        shortStop.decimal('SLG2017', 8, 1);
        shortStop.integer('PA2017');
        shortStop.integer('Doubles2017');
        shortStop.integer('HR2017');
        shortStop.integer('Runs2017');
        shortStop.integer('RBI2017');
        shortStop.string('LineupSlot2017', 50);
        shortStop.string('GB%2017', 50);
        shortStop.string('LD%2017', 50);
        shortStop.string('FB%2017', 50);
        shortStop.string('Pull%2017', 50);
        shortStop.string('Center%2017', 50);
        shortStop.string('Oppo%2017', 50);
        shortStop.string('HR/FB%2017', 50);
        shortStop.string('HardHit%2017', 50);
        shortStop.decimal('ExitVelo2017', 8, 1);
        shortStop.decimal('FlyBallLineDriveExitVelo2017', 8, 1);
        shortStop.decimal('LaunchAngle2017', 8, 1);
        shortStop.string('Barrel%2017', 50);
        shortStop.decimal('BABIP2017', 8, 3);
        shortStop.decimal('WOBA2017', 8, 3);
        shortStop.decimal('xWOBA2017', 8, 3);
        shortStop.decimal('xBA2017', 8, 3);
        shortStop.integer('AvgHRDistance2017');
        shortStop.integer('WRC+2017');
        shortStop.integer('OPS+2017');
        shortStop.string('BB%2017', 50);
        shortStop.string('K%2017', 50);
        shortStop.string('ChaseRate2017', 50);
        shortStop.string('Contact%2017', 50);
        shortStop.decimal('SprintSpeed2017', 8, 1);
        shortStop.integer('StolenBases2017');
        shortStop.string('StolenBase%2017', 4);
        shortStop.decimal('FWAR2017', 8, 1);
        shortStop.integer('GamesPlayed2018');
        shortStop.decimal('BA2018', 8, 1);
        shortStop.decimal('OBP2018', 8, 1);
        shortStop.decimal('SLG2018', 8, 1);
        shortStop.integer('PA2018');
        shortStop.integer('Doubles2018');
        shortStop.integer('HR2018');
        shortStop.integer('Runs2018');
        shortStop.integer('RBI2018');
        shortStop.string('LineupSlot2018', 50);
        shortStop.string('GB%2018', 50);
        shortStop.string('LD%2018', 50);
        shortStop.string('FB%2018', 50);
        shortStop.string('Pull%2018', 50);
        shortStop.string('Center%2018', 50);
        shortStop.string('Oppo%2018', 50);
        shortStop.string('HR/FB%2018', 50);
        shortStop.string('HardHit%2018', 50);
        shortStop.decimal('ExitVelo2018', 8, 1);
        shortStop.decimal('FlyBallLineDriveExitVelo2018', 8, 1);
        shortStop.decimal('LaunchAngle2018', 8, 1);
        shortStop.string('Barrel%2018', 50);
        shortStop.decimal('BABIP2018', 8, 3);
        shortStop.decimal('WOBA2018', 8, 3);
        shortStop.decimal('xWOBA2018', 8, 3);
        shortStop.decimal('xBA2018', 8, 3);
        shortStop.integer('AvgHRDistance2018');
        shortStop.integer('WRC+2018');
        shortStop.integer('OPS+2018');
        shortStop.string('BB%2018', 50);
        shortStop.string('K%2018', 50);
        shortStop.string('ChaseRate2018', 50);
        shortStop.string('Contact%2018', 50);
        shortStop.decimal('SprintSpeed2018', 8, 1);
        shortStop.integer('StolenBases2018');
        shortStop.string('StolenBase%2018', 4);
        shortStop.decimal('FWAR2018', 8, 1);
        shortStop.integer('GamesPlayed2019');
        shortStop.decimal('BA2019', 8, 1);
        shortStop.decimal('OBP2019', 8, 1);
        shortStop.decimal('SLG2019', 8, 1);
        shortStop.integer('PA2019');
        shortStop.integer('Doubles2019');
        shortStop.integer('HR2019');
        shortStop.integer('Runs2019');
        shortStop.integer('RBI2019');
        shortStop.string('LineupSlot2019', 50);
        shortStop.string('GB%2019', 50);
        shortStop.string('LD%2019', 50);
        shortStop.string('FB%2019', 50);
        shortStop.string('Pull%2019', 50);
        shortStop.string('Center%2019', 50);
        shortStop.string('Oppo%2019', 50);
        shortStop.string('HR/FB%2019', 50);
        shortStop.string('HardHit%2019', 50);
        shortStop.decimal('ExitVelo2019', 8, 1);
        shortStop.decimal('FlyBallLineDriveExitVelo2019', 8, 1);
        shortStop.decimal('LaunchAngle2019', 8, 1);
        shortStop.string('Barrel%2019', 50);
        shortStop.decimal('BABIP2019', 8, 3);
        shortStop.decimal('WOBA2019', 8, 3);
        shortStop.decimal('xWOBA2019', 8, 3);
        shortStop.decimal('xBA2019', 8, 3);
        shortStop.integer('AvgHRDistance2019');
        shortStop.integer('WRC+2019');
        shortStop.integer('OPS+2019');
        shortStop.string('BB%2019', 50);
        shortStop.string('K%2019', 50);
        shortStop.string('ChaseRate2019', 50);
        shortStop.string('Contact%2019', 50);
        shortStop.decimal('SprintSpeed2019', 8, 1);
        shortStop.integer('StolenBases2019');
        shortStop.string('StolenBase%2019', 4);
        shortStop.decimal('FWAR2019', 8, 1);
        shortStop.integer('SteamerPAProjection');
        shortStop.decimal('SteamerAVGProjection', 8, 3);
        shortStop.decimal('SteamerOBPProjection', 8, 3);
        shortStop.decimal('SteamerSLGProjection', 8, 3);
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