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
        firstBase.integer('2017GamesPlayed');
        firstBase.decimal('2017BA', 8, 1);
        firstBase.decimal('2017OBP', 8, 1);
        firstBase.decimal('2017SLG', 8, 1);
        firstBase.integer('2017PA');
        firstBase.integer('20172B');
        firstBase.integer('2017HR');
        firstBase.integer('2017Runs');
        firstBase.integer('2017RBI');
        firstBase.string('2017LineupSlot', 50);
        firstBase.string('2017GB%', 50);
        firstBase.string('2017LD%', 50);
        firstBase.string('2017FB%', 50);
        firstBase.string('2017Pull%', 50);
        firstBase.string('2017Center%', 50);
        firstBase.string('2017Oppo%', 50);
        firstBase.string('2017HR/FB%', 50);
        firstBase.string('2017HardHit%', 50);
        firstBase.decimal('2017ExitVelo', 8, 1);
        firstBase.decimal('2017FlyBallLineDriveExitVelo', 8, 1);
        firstBase.decimal('2017LaunchAngle', 8, 1);
        firstBase.string('2017Barrel%', 50);
        firstBase.decimal('2017BABIP', 8, 3);
        firstBase.decimal('2017WOBA', 8, 3);
        firstBase.decimal('2017xWOBA', 8, 3);
        firstBase.decimal('2017xBA', 8, 3);
        firstBase.integer('2017AvgHRDistance');
        firstBase.integer('2017WRC+');
        firstBase.integer('2017OPS+');
        firstBase.string('2017BB%', 50);
        firstBase.string('2017K%', 50);
        firstBase.string('2017ChaseRate', 50);
        firstBase.string('2017Contact%', 50);
        firstBase.decimal('2017SprintSpeed', 8, 1);
        firstBase.integer('2017StolenBases');
        firstBase.string('2017StolenBase%', 4);
        firstBase.decimal('2017FWAR', 8, 1);
        firstBase.integer('2018GamesPlayed');
        firstBase.decimal('2018BA', 8, 1);
        firstBase.decimal('2018OBP', 8, 1);
        firstBase.decimal('2018SLG', 8, 1);
        firstBase.integer('2018PA');
        firstBase.integer('20182B');
        firstBase.integer('2018HR');
        firstBase.integer('2018Runs');
        firstBase.integer('2018RBI');
        firstBase.string('2018LineupSlot', 50);
        firstBase.string('2018GB%', 50);
        firstBase.string('2018LD%', 50);
        firstBase.string('2018FB%', 50);
        firstBase.string('2018Pull%', 50);
        firstBase.string('2018Center%', 50);
        firstBase.string('2018Oppo%', 50);
        firstBase.string('2018HR/FB%', 50);
        firstBase.string('2018HardHit%', 50);
        firstBase.decimal('2018ExitVelo', 8, 1);
        firstBase.decimal('2018FlyBallLineDriveExitVelo', 8, 1);
        firstBase.decimal('2018LaunchAngle', 8, 1);
        firstBase.string('2018Barrel%', 50);
        firstBase.decimal('2018BABIP', 8, 3);
        firstBase.decimal('2018WOBA', 8, 3);
        firstBase.decimal('2018xWOBA', 8, 3);
        firstBase.decimal('2018xBA', 8, 3);
        firstBase.integer('2018AvgHRDistance');
        firstBase.integer('2018WRC+');
        firstBase.integer('2018OPS+');
        firstBase.string('2018BB%', 50);
        firstBase.string('2018K%', 50);
        firstBase.string('2018ChaseRate', 50);
        firstBase.string('2018Contact%', 50);
        firstBase.decimal('2018SprintSpeed', 8, 1);
        firstBase.integer('2018StolenBases');
        firstBase.string('2018StolenBase%', 4);
        firstBase.decimal('2018FWAR', 8, 1);
        firstBase.integer('2019GamesPlayed');
        firstBase.decimal('2019BA', 8, 1);
        firstBase.decimal('2019OBP', 8, 1);
        firstBase.decimal('2019SLG', 8, 1);
        firstBase.integer('2019PA');
        firstBase.integer('20192B');
        firstBase.integer('2019HR');
        firstBase.integer('2019Runs');
        firstBase.integer('2019RBI');
        firstBase.string('2019LineupSlot', 50);
        firstBase.string('2019GB%', 50);
        firstBase.string('2019LD%', 50);
        firstBase.string('2019FB%', 50);
        firstBase.string('2019Pull%', 50);
        firstBase.string('2019Center%', 50);
        firstBase.string('2019Oppo%', 50);
        firstBase.string('2019HR/FB%', 50);
        firstBase.string('2019HardHit%', 50);
        firstBase.decimal('2019ExitVelo', 8, 1);
        firstBase.decimal('2019FlyBallLineDriveExitVelo', 8, 1);
        firstBase.decimal('2019LaunchAngle', 8, 1);
        firstBase.string('2019Barrel%', 50);
        firstBase.decimal('2019BABIP', 8, 3);
        firstBase.decimal('2019WOBA', 8, 3);
        firstBase.decimal('2019xWOBA', 8, 3);
        firstBase.decimal('2019xBA', 8, 3);
        firstBase.integer('2019AvgHRDistance');
        firstBase.integer('2019WRC+');
        firstBase.integer('2019OPS+');
        firstBase.string('2019BB%', 50);
        firstBase.string('2019K%', 50);
        firstBase.string('2019ChaseRate', 50);
        firstBase.string('2019Contact%', 50);
        firstBase.decimal('2019SprintSpeed', 8, 1);
        firstBase.integer('2019StolenBases');
        firstBase.string('2019StolenBase%', 4);
        firstBase.decimal('2019FWAR', 8, 1);
        firstBase.integer('2020SteamerPAProjection');
        firstBase.decimal('2020SteamerAVGProjection', 8, 3);
        firstBase.decimal('2020SteamerOBPProjection', 8, 3);
        firstBase.decimal('2020SteamerSLGProjection', 8, 3);
        firstBase.integer('2020SteamerHRProjection', 50);
        firstBase.integer('2020SteamerRunsProjection', 50);
        firstBase.integer('2020SteamerRBIProjection', 50);
        firstBase.integer('2020SteamerSBProjection');
        firstBase.decimal('2020SteamerFWARProjection', 8, 1);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('firstBase');
};