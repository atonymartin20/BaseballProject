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
        secondBase.integer('2017GamesPlayed');
        secondBase.decimal('2017BA', 8, 1);
        secondBase.decimal('2017OBP', 8, 1);
        secondBase.decimal('2017SLG', 8, 1);
        secondBase.integer('2017PA');
        secondBase.integer('20172B');
        secondBase.integer('2017HR');
        secondBase.integer('2017Runs');
        secondBase.integer('2017RBI');
        secondBase.string('2017LineupSlot', 50);
        secondBase.string('2017GB%', 50);
        secondBase.string('2017LD%', 50);
        secondBase.string('2017FB%', 50);
        secondBase.string('2017Pull%', 50);
        secondBase.string('2017Center%', 50);
        secondBase.string('2017Oppo%', 50);
        secondBase.string('2017HR/FB%', 50);
        secondBase.string('2017HardHit%', 50);
        secondBase.decimal('2017ExitVelo', 8, 1);
        secondBase.decimal('2017FlyBallLineDriveExitVelo', 8, 1);
        secondBase.decimal('2017LaunchAngle', 8, 1);
        secondBase.string('2017Barrel%', 50);
        secondBase.decimal('2017BABIP', 8, 3);
        secondBase.decimal('2017WOBA', 8, 3);
        secondBase.decimal('2017xWOBA', 8, 3);
        secondBase.decimal('2017xBA', 8, 3);
        secondBase.integer('2017AvgHRDistance');
        secondBase.integer('2017WRC+');
        secondBase.integer('2017OPS+');
        secondBase.string('2017BB%', 50);
        secondBase.string('2017K%', 50);
        secondBase.string('2017ChaseRate', 50);
        secondBase.string('2017Contact%', 50);
        secondBase.decimal('2017SprintSpeed', 8, 1);
        secondBase.integer('2017StolenBases');
        secondBase.string('2017StolenBase%', 4);
        secondBase.decimal('2017FWAR', 8, 1);
        secondBase.integer('2018GamesPlayed');
        secondBase.decimal('2018BA', 8, 1);
        secondBase.decimal('2018OBP', 8, 1);
        secondBase.decimal('2018SLG', 8, 1);
        secondBase.integer('2018PA');
        secondBase.integer('20182B');
        secondBase.integer('2018HR');
        secondBase.integer('2018Runs');
        secondBase.integer('2018RBI');
        secondBase.string('2018LineupSlot', 50);
        secondBase.string('2018GB%', 50);
        secondBase.string('2018LD%', 50);
        secondBase.string('2018FB%', 50);
        secondBase.string('2018Pull%', 50);
        secondBase.string('2018Center%', 50);
        secondBase.string('2018Oppo%', 50);
        secondBase.string('2018HR/FB%', 50);
        secondBase.string('2018HardHit%', 50);
        secondBase.decimal('2018ExitVelo', 8, 1);
        secondBase.decimal('2018FlyBallLineDriveExitVelo', 8, 1);
        secondBase.decimal('2018LaunchAngle', 8, 1);
        secondBase.string('2018Barrel%', 50);
        secondBase.decimal('2018BABIP', 8, 3);
        secondBase.decimal('2018WOBA', 8, 3);
        secondBase.decimal('2018xWOBA', 8, 3);
        secondBase.decimal('2018xBA', 8, 3);
        secondBase.integer('2018AvgHRDistance');
        secondBase.integer('2018WRC+');
        secondBase.integer('2018OPS+');
        secondBase.string('2018BB%', 50);
        secondBase.string('2018K%', 50);
        secondBase.string('2018ChaseRate', 50);
        secondBase.string('2018Contact%', 50);
        secondBase.decimal('2018SprintSpeed', 8, 1);
        secondBase.integer('2018StolenBases');
        secondBase.string('2018StolenBase%', 4);
        secondBase.decimal('2018FWAR', 8, 1);
        secondBase.integer('2019GamesPlayed');
        secondBase.decimal('2019BA', 8, 1);
        secondBase.decimal('2019OBP', 8, 1);
        secondBase.decimal('2019SLG', 8, 1);
        secondBase.integer('2019PA');
        secondBase.integer('20192B');
        secondBase.integer('2019HR');
        secondBase.integer('2019Runs');
        secondBase.integer('2019RBI');
        secondBase.string('2019LineupSlot', 50);
        secondBase.string('2019GB%', 50);
        secondBase.string('2019LD%', 50);
        secondBase.string('2019FB%', 50);
        secondBase.string('2019Pull%', 50);
        secondBase.string('2019Center%', 50);
        secondBase.string('2019Oppo%', 50);
        secondBase.string('2019HR/FB%', 50);
        secondBase.string('2019HardHit%', 50);
        secondBase.decimal('2019ExitVelo', 8, 1);
        secondBase.decimal('2019FlyBallLineDriveExitVelo', 8, 1);
        secondBase.decimal('2019LaunchAngle', 8, 1);
        secondBase.string('2019Barrel%', 50);
        secondBase.decimal('2019BABIP', 8, 3);
        secondBase.decimal('2019WOBA', 8, 3);
        secondBase.decimal('2019xWOBA', 8, 3);
        secondBase.decimal('2019xBA', 8, 3);
        secondBase.integer('2019AvgHRDistance');
        secondBase.integer('2019WRC+');
        secondBase.integer('2019OPS+');
        secondBase.string('2019BB%', 50);
        secondBase.string('2019K%', 50);
        secondBase.string('2019ChaseRate', 50);
        secondBase.string('2019Contact%', 50);
        secondBase.decimal('2019SprintSpeed', 8, 1);
        secondBase.integer('2019StolenBases');
        secondBase.string('2019StolenBase%', 4);
        secondBase.decimal('2019FWAR', 8, 1);
        secondBase.integer('2020SteamerPAProjection');
        secondBase.decimal('2020SteamerAVGProjection', 8, 3);
        secondBase.decimal('2020SteamerOBPProjection', 8, 3);
        secondBase.decimal('2020SteamerSLGProjection', 8, 3);
        secondBase.integer('2020SteamerHRProjection', 50);
        secondBase.integer('2020SteamerRunsProjection', 50);
        secondBase.integer('2020SteamerRBIProjection', 50);
        secondBase.integer('2020SteamerSBProjection');
        secondBase.decimal('2020SteamerFWARProjection', 8, 1);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('secondBase');
};