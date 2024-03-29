exports.up = function (knex, Promise) {
    return knex.schema.createTable('outfield', outfield => {
        outfield.increments();
        outfield.string('firstName', 50);
        outfield.string('lastName', 50);
        outfield.string('birthday', 50);
        outfield.string('bats', 1);
        outfield.string('throws', 1);
        outfield.string('currentTeam', 50);
        outfield.string('imageURL', 500);
        outfield.string('primaryPosition', 50);
        outfield.string('otherPositions', 50);
        outfield.integer('GamesPlayed2017');
        outfield.decimal('BA2017', 8, 3);
        outfield.decimal('OBP2017', 8, 3);
        outfield.decimal('SLG2017', 8, 3);
        outfield.integer('PA2017');
        outfield.integer('Doubles2017');
        outfield.integer('HR2017');
        outfield.integer('Runs2017');
        outfield.integer('RBI2017');
        outfield.string('LineupSlot2017', 50);
        outfield.string('GBPercent2017', 50);
        outfield.string('LDPercent2017', 50);
        outfield.string('FBPercent2017', 50);
        outfield.string('PullPercent2017', 50);
        outfield.string('CenterPercent2017', 50);
        outfield.string('OppoPercent2017', 50);
        outfield.string('HRPerFB2017', 50);
        outfield.string('HardHitPercent2017', 50);
        outfield.decimal('ExitVelo2017', 8, 1);
        outfield.decimal('FlyBallLineDriveExitVelo2017', 8, 1);
        outfield.decimal('LaunchAngle2017', 8, 1);
        outfield.string('BarrelPercent2017', 50);
        outfield.decimal('BABIP2017', 8, 3);
        outfield.decimal('WOBA2017', 8, 3);
        outfield.decimal('xWOBA2017', 8, 3);
        outfield.decimal('xBA2017', 8, 3);
        outfield.integer('AvgHRDistance2017');
        outfield.integer('WRCPlus2017');
        outfield.integer('OPSPlus2017');
        outfield.string('BBPercent2017', 50);
        outfield.string('KPercent2017', 50);
        outfield.string('ChaseRate2017', 50);
        outfield.string('ContactPercent2017', 50);
        outfield.decimal('SprintSpeed2017', 8, 1);
        outfield.integer('StolenBases2017');
        outfield.string('StolenBasePercent2017', 50);
        outfield.decimal('FWAR2017', 8, 1);
        outfield.integer('GamesPlayed2018');
        outfield.decimal('BA2018', 8, 3);
        outfield.decimal('OBP2018', 8, 3);
        outfield.decimal('SLG2018', 8, 3);
        outfield.integer('PA2018');
        outfield.integer('Doubles2018');
        outfield.integer('HR2018');
        outfield.integer('Runs2018');
        outfield.integer('RBI2018');
        outfield.string('LineupSlot2018', 50);
        outfield.string('GBPercent2018', 50);
        outfield.string('LDPercent2018', 50);
        outfield.string('FBPercent2018', 50);
        outfield.string('PullPercent2018', 50);
        outfield.string('CenterPercent2018', 50);
        outfield.string('OppoPercent2018', 50);
        outfield.string('HRPerFB2018', 50);
        outfield.string('HardHitPercent2018', 50);
        outfield.decimal('ExitVelo2018', 8, 1);
        outfield.decimal('FlyBallLineDriveExitVelo2018', 8, 1);
        outfield.decimal('LaunchAngle2018', 8, 1);
        outfield.string('BarrelPercent2018', 50);
        outfield.decimal('BABIP2018', 8, 3);
        outfield.decimal('WOBA2018', 8, 3);
        outfield.decimal('xWOBA2018', 8, 3);
        outfield.decimal('xBA2018', 8, 3);
        outfield.integer('AvgHRDistance2018');
        outfield.integer('WRCPlus2018');
        outfield.integer('OPSPlus2018');
        outfield.string('BBPercent2018', 50);
        outfield.string('KPercent2018', 50);
        outfield.string('ChaseRate2018', 50);
        outfield.string('ContactPercent2018', 50);
        outfield.decimal('SprintSpeed2018', 8, 1);
        outfield.integer('StolenBases2018');
        outfield.string('StolenBasePercent2018', 50);
        outfield.decimal('FWAR2018', 8, 1);
        outfield.integer('GamesPlayed2019');
        outfield.decimal('BA2019', 8, 3);
        outfield.decimal('OBP2019', 8, 3);
        outfield.decimal('SLG2019', 8, 3);
        outfield.integer('PA2019');
        outfield.integer('Doubles2019');
        outfield.integer('HR2019');
        outfield.integer('Runs2019');
        outfield.integer('RBI2019');
        outfield.string('LineupSlot2019', 50);
        outfield.string('GBPercent2019', 50);
        outfield.string('LDPercent2019', 50);
        outfield.string('FBPercent2019', 50);
        outfield.string('PullPercent2019', 50);
        outfield.string('CenterPercent2019', 50);
        outfield.string('OppoPercent2019', 50);
        outfield.string('HRPerFB2019', 50);
        outfield.string('HardHitPercent2019', 50);
        outfield.decimal('ExitVelo2019', 8, 1);
        outfield.decimal('FlyBallLineDriveExitVelo2019', 8, 1);
        outfield.decimal('LaunchAngle2019', 8, 1);
        outfield.string('BarrelPercent2019', 50);
        outfield.decimal('BABIP2019', 8, 3);
        outfield.decimal('WOBA2019', 8, 3);
        outfield.decimal('xWOBA2019', 8, 3);
        outfield.decimal('xBA2019', 8, 3);
        outfield.integer('AvgHRDistance2019');
        outfield.integer('WRCPlus2019');
        outfield.integer('OPSPlus2019');
        outfield.string('BBPercent2019', 50);
        outfield.string('KPercent2019', 50);
        outfield.string('ChaseRate2019', 50);
        outfield.string('ContactPercent2019', 50);
        outfield.decimal('SprintSpeed2019', 8, 1);
        outfield.integer('StolenBases2019');
        outfield.string('StolenBasePercent2019', 50);
        outfield.decimal('FWAR2019', 8, 1);
        outfield.integer('GamesPlayed2020');
        outfield.decimal('BA2020', 8, 3);
        outfield.decimal('OBP2020', 8, 3);
        outfield.decimal('SLG2020', 8, 3);
        outfield.integer('PA2020');
        outfield.integer('Doubles2020');
        outfield.integer('HR2020');
        outfield.integer('Runs2020');
        outfield.integer('RBI2020');
        outfield.string('LineupSlot2020', 50);
        outfield.string('GBPercent2020', 50);
        outfield.string('LDPercent2020', 50);
        outfield.string('FBPercent2020', 50);
        outfield.string('PullPercent2020', 50);
        outfield.string('CenterPercent2020', 50);
        outfield.string('OppoPercent2020', 50);
        outfield.string('HRPerFB2020', 50);
        outfield.string('HardHitPercent2020', 50);
        outfield.decimal('ExitVelo2020', 8, 1);
        outfield.decimal('FlyBallLineDriveExitVelo2020', 8, 1);
        outfield.decimal('LaunchAngle2020', 8, 1);
        outfield.string('BarrelPercent2020', 50);
        outfield.decimal('BABIP2020', 8, 3);
        outfield.decimal('WOBA2020', 8, 3);
        outfield.decimal('xWOBA2020', 8, 3);
        outfield.decimal('xBA2020', 8, 3);
        outfield.integer('AvgHRDistance2020');
        outfield.integer('WRCPlus2020');
        outfield.integer('OPSPlus2020');
        outfield.string('BBPercent2020', 50);
        outfield.string('KPercent2020', 50);
        outfield.string('ChaseRate2020', 50);
        outfield.string('ContactPercent2020', 50);
        outfield.decimal('SprintSpeed2020', 8, 1);
        outfield.integer('StolenBases2020');
        outfield.string('StolenBasePercent2020', 50);
        outfield.decimal('FWAR2020', 8, 1);
        outfield.integer('GamesPlayed2021');
        outfield.decimal('BA2021', 8, 3);
        outfield.decimal('OBP2021', 8, 3);
        outfield.decimal('SLG2021', 8, 3);
        outfield.integer('PA2021');
        outfield.integer('Doubles2021');
        outfield.integer('HR2021');
        outfield.integer('Runs2021');
        outfield.integer('RBI2021');
        outfield.string('LineupSlot2021', 50);
        outfield.string('GBPercent2021', 50);
        outfield.string('LDPercent2021', 50);
        outfield.string('FBPercent2021', 50);
        outfield.string('PullPercent2021', 50);
        outfield.string('CenterPercent2021', 50);
        outfield.string('OppoPercent2021', 50);
        outfield.string('HRPerFB2021', 50);
        outfield.string('HardHitPercent2021', 50);
        outfield.decimal('ExitVelo2021', 8, 1);
        outfield.decimal('FlyBallLineDriveExitVelo2021', 8, 1);
        outfield.decimal('LaunchAngle2021', 8, 1);
        outfield.string('BarrelPercent2021', 50);
        outfield.decimal('BABIP2021', 8, 3);
        outfield.decimal('WOBA2021', 8, 3);
        outfield.decimal('xWOBA2021', 8, 3);
        outfield.decimal('xBA2021', 8, 3);
        outfield.integer('AvgHRDistance2021');
        outfield.integer('WRCPlus2021');
        outfield.integer('OPSPlus2021');
        outfield.string('BBPercent2021', 50);
        outfield.string('KPercent2021', 50);
        outfield.string('ChaseRate2021', 50);
        outfield.string('ContactPercent2021', 50);
        outfield.decimal('SprintSpeed2021', 8, 1);
        outfield.integer('StolenBases2021');
        outfield.string('StolenBasePercent2021', 50);
        outfield.decimal('FWAR2021', 8, 1);
        outfield.integer('GamesPlayed2022');
        outfield.decimal('BA2022', 8, 3);
        outfield.decimal('OBP2022', 8, 3);
        outfield.decimal('SLG2022', 8, 3);
        outfield.integer('PA2022');
        outfield.integer('Doubles2022');
        outfield.integer('HR2022');
        outfield.integer('Runs2022');
        outfield.integer('RBI2022');
        outfield.string('LineupSlot2022', 50);
        outfield.string('GBPercent2022', 50);
        outfield.string('LDPercent2022', 50);
        outfield.string('FBPercent2022', 50);
        outfield.string('PullPercent2022', 50);
        outfield.string('CenterPercent2022', 50);
        outfield.string('OppoPercent2022', 50);
        outfield.string('HRPerFB2022', 50);
        outfield.string('HardHitPercent2022', 50);
        outfield.decimal('ExitVelo2022', 8, 1);
        outfield.decimal('FlyBallLineDriveExitVelo2022', 8, 1);
        outfield.decimal('LaunchAngle2022', 8, 1);
        outfield.string('BarrelPercent2022', 50);
        outfield.decimal('BABIP2022', 8, 3);
        outfield.decimal('WOBA2022', 8, 3);
        outfield.decimal('xWOBA2022', 8, 3);
        outfield.decimal('xBA2022', 8, 3);
        outfield.integer('AvgHRDistance2022');
        outfield.integer('WRCPlus2022');
        outfield.integer('OPSPlus2022');
        outfield.string('BBPercent2022', 50);
        outfield.string('KPercent2022', 50);
        outfield.string('ChaseRate2022', 50);
        outfield.string('ContactPercent2022', 50);
        outfield.decimal('SprintSpeed2022', 8, 1);
        outfield.integer('StolenBases2022');
        outfield.string('StolenBasePercent2022', 50);
        outfield.decimal('FWAR2022', 8, 1);
        outfield.integer('TheBatXPAProjection');
        outfield.decimal('TheBatXAVGProjection', 8, 3);
        outfield.decimal('TheBatXOBPProjection', 8, 3);
        outfield.decimal('TheBatXSLGProjection', 8, 3);
        outfield.integer('TheBatXDoublesProjection', 50);
        outfield.integer('TheBatXHRProjection', 50);
        outfield.integer('TheBatXRunsProjection', 50);
        outfield.integer('TheBatXRBIProjection', 50);
        outfield.integer('TheBatXSBProjection');
        outfield.decimal('TheBatXFWARProjection', 8, 1);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('outfield');
};