exports.up = function (knex, Promise) {
    return knex.schema.createTable('firstBase', firstBase => {
        firstBase.increments();
        firstBase.string('firstName', 50);
        firstBase.string('lastName', 50);
        firstBase.string('birthday', 50);
        firstBase.string('bats', 1);
        firstBase.string('throws', 1);
        firstBase.string('currentTeam', 50);
        firstBase.string('imageURL', 500);
        firstBase.string('primaryPosition', 50);
        firstBase.string('otherPositions', 50);
        firstBase.integer('GamesPlayed2017');
        firstBase.decimal('BA2017', 8, 3);
        firstBase.decimal('OBP2017', 8, 3);
        firstBase.decimal('SLG2017', 8, 3);
        firstBase.integer('PA2017');
        firstBase.integer('Doubles2017');
        firstBase.integer('HR2017');
        firstBase.integer('Runs2017');
        firstBase.integer('RBI2017');
        firstBase.string('LineupSlot2017', 50);
        firstBase.string('GB%2017', 50);
        firstBase.string('LD%2017', 50);
        firstBase.string('FB%2017', 50);
        firstBase.string('Pull%2017', 50);
        firstBase.string('Center%2017', 50);
        firstBase.string('Oppo%2017', 50);
        firstBase.string('HRPerFB2017', 50);
        firstBase.string('HardHit%2017', 50);
        firstBase.decimal('ExitVelo2017', 8, 1);
        firstBase.decimal('FlyBallLineDriveExitVelo2017', 8, 1);
        firstBase.decimal('LaunchAngle2017', 8, 1);
        firstBase.string('Barrel%2017', 50);
        firstBase.decimal('BABIP2017', 8, 3);
        firstBase.decimal('WOBA2017', 8, 3);
        firstBase.decimal('xWOBA2017', 8, 3);
        firstBase.decimal('xBA2017', 8, 3);
        firstBase.integer('AvgHRDistance2017');
        firstBase.integer('WRC+2017');
        firstBase.integer('OPS+2017');
        firstBase.string('BB%2017', 50);
        firstBase.string('K%2017', 50);
        firstBase.string('ChaseRate2017', 50);
        firstBase.string('Contact%2017', 50);
        firstBase.decimal('SprintSpeed2017', 8, 1);
        firstBase.integer('StolenBases2017');
        firstBase.string('StolenBase%2017', 50);
        firstBase.decimal('FWAR2017', 8, 1);
        firstBase.integer('GamesPlayed2018');
        firstBase.decimal('BA2018', 8, 3);
        firstBase.decimal('OBP2018', 8, 3);
        firstBase.decimal('SLG2018', 8, 3);
        firstBase.integer('PA2018');
        firstBase.integer('Doubles2018');
        firstBase.integer('HR2018');
        firstBase.integer('Runs2018');
        firstBase.integer('RBI2018');
        firstBase.string('LineupSlot2018', 50);
        firstBase.string('GB%2018', 50);
        firstBase.string('LD%2018', 50);
        firstBase.string('FB%2018', 50);
        firstBase.string('Pull%2018', 50);
        firstBase.string('Center%2018', 50);
        firstBase.string('Oppo%2018', 50);
        firstBase.string('HRPerFB2018', 50);
        firstBase.string('HardHit%2018', 50);
        firstBase.decimal('ExitVelo2018', 8, 1);
        firstBase.decimal('FlyBallLineDriveExitVelo2018', 8, 1);
        firstBase.decimal('LaunchAngle2018', 8, 1);
        firstBase.string('Barrel%2018', 50);
        firstBase.decimal('BABIP2018', 8, 3);
        firstBase.decimal('WOBA2018', 8, 3);
        firstBase.decimal('xWOBA2018', 8, 3);
        firstBase.decimal('xBA2018', 8, 3);
        firstBase.integer('AvgHRDistance2018');
        firstBase.integer('WRC+2018');
        firstBase.integer('OPS+2018');
        firstBase.string('BB%2018', 50);
        firstBase.string('K%2018', 50);
        firstBase.string('ChaseRate2018', 50);
        firstBase.string('Contact%2018', 50);
        firstBase.decimal('SprintSpeed2018', 8, 1);
        firstBase.integer('StolenBases2018');
        firstBase.string('StolenBase%2018', 50);
        firstBase.decimal('FWAR2018', 8, 1);
        firstBase.integer('GamesPlayed2019');
        firstBase.decimal('BA2019', 8, 3);
        firstBase.decimal('OBP2019', 8, 3);
        firstBase.decimal('SLG2019', 8, 3);
        firstBase.integer('PA2019');
        firstBase.integer('Doubles2019');
        firstBase.integer('HR2019');
        firstBase.integer('Runs2019');
        firstBase.integer('RBI2019');
        firstBase.string('LineupSlot2019', 50);
        firstBase.string('GB%2019', 50);
        firstBase.string('LD%2019', 50);
        firstBase.string('FB%2019', 50);
        firstBase.string('Pull%2019', 50);
        firstBase.string('Center%2019', 50);
        firstBase.string('Oppo%2019', 50);
        firstBase.string('HRPerFB2019', 50);
        firstBase.string('HardHit%2019', 50);
        firstBase.decimal('ExitVelo2019', 8, 1);
        firstBase.decimal('FlyBallLineDriveExitVelo2019', 8, 1);
        firstBase.decimal('LaunchAngle2019', 8, 1);
        firstBase.string('Barrel%2019', 50);
        firstBase.decimal('BABIP2019', 8, 3);
        firstBase.decimal('WOBA2019', 8, 3);
        firstBase.decimal('xWOBA2019', 8, 3);
        firstBase.decimal('xBA2019', 8, 3);
        firstBase.integer('AvgHRDistance2019');
        firstBase.integer('WRC+2019');
        firstBase.integer('OPS+2019');
        firstBase.string('BB%2019', 50);
        firstBase.string('K%2019', 50);
        firstBase.string('ChaseRate2019', 50);
        firstBase.string('Contact%2019', 50);
        firstBase.decimal('SprintSpeed2019', 8, 1);
        firstBase.integer('StolenBases2019');
        firstBase.string('StolenBase%2019', 50);
        firstBase.decimal('FWAR2019', 8, 1);
        firstBase.integer('SteamerPAProjection');
        firstBase.decimal('SteamerAVGProjection', 8, 3);
        firstBase.decimal('SteamerOBPProjection', 8, 3);
        firstBase.decimal('SteamerSLGProjection', 8, 3);
        firstBase.integer('SteamerHRProjection', 50);
        firstBase.integer('SteamerRunsProjection', 50);
        firstBase.integer('SteamerRBIProjection', 50);
        firstBase.integer('SteamerSBProjection');
        firstBase.decimal('SteamerFWARProjection', 8, 1);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('firstBase');
};