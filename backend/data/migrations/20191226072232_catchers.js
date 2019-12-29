exports.up = function (knex, Promise) {
    return knex.schema.createTable('catchers', catchers => {
        catchers.increments();
        catchers.string('firstName', 50);
        catchers.string('lastName', 50);
        catchers.string('birthday', 50);
        catchers.string('bats', 1);
        catchers.string('throws', 1);
        catchers.string('currentTeam', 50);
        catchers.string('imageURL', 500);
        catchers.string('primaryPosition', 50);
        catchers.string('otherPositions', 50);
        catchers.integer('2017GamesPlayed');
        catchers.decimal('2017BA', 8, 1);
        catchers.decimal('2017OBP', 8, 1);
        catchers.decimal('2017SLG', 8, 1);
        catchers.integer('2017PA');
        catchers.integer('20172B');
        catchers.integer('2017HR');
        catchers.integer('2017Runs');
        catchers.integer('2017RBI');
        catchers.string('2017LineupSlot', 50);
        catchers.string('2017GB%', 50);
        catchers.string('2017LD%', 50);
        catchers.string('2017FB%', 50);
        catchers.string('2017Pull%', 50);
        catchers.string('2017Center%', 50);
        catchers.string('2017Oppo%', 50);
        catchers.string('2017HR/FB%', 50);
        catchers.string('2017HardHit%', 50);
        catchers.decimal('2017ExitVelo', 8, 1);
        catchers.decimal('2017FlyBallLineDriveExitVelo', 8, 1);
        catchers.decimal('2017LaunchAngle', 8, 1);
        catchers.string('2017Barrel%', 50);
        catchers.decimal('2017BABIP', 8, 3);
        catchers.decimal('2017WOBA', 8, 3);
        catchers.decimal('2017xWOBA', 8, 3);
        catchers.decimal('2017xBA', 8, 3);
        catchers.integer('2017AvgHRDistance');
        catchers.integer('2017WRC+');
        catchers.integer('2017OPS+');
        catchers.string('2017BB%', 50);
        catchers.string('2017K%', 50);
        catchers.string('2017ChaseRate', 50);
        catchers.string('2017Contact%', 50);
        catchers.decimal('2017SprintSpeed', 8, 1);
        catchers.integer('2017StolenBases');
        catchers.string('2017StolenBase%', 4);
        catchers.decimal('2017FWAR', 8, 1);
        catchers.integer('2018GamesPlayed');
        catchers.decimal('2018BA', 8, 1);
        catchers.decimal('2018OBP', 8, 1);
        catchers.decimal('2018SLG', 8, 1);
        catchers.integer('2018PA');
        catchers.integer('20182B');
        catchers.integer('2018HR');
        catchers.integer('2018Runs');
        catchers.integer('2018RBI');
        catchers.string('2018LineupSlot', 50);
        catchers.string('2018GB%', 50);
        catchers.string('2018LD%', 50);
        catchers.string('2018FB%', 50);
        catchers.string('2018Pull%', 50);
        catchers.string('2018Center%', 50);
        catchers.string('2018Oppo%', 50);
        catchers.string('2018HR/FB%', 50);
        catchers.string('2018HardHit%', 50);
        catchers.decimal('2018ExitVelo', 8, 1);
        catchers.decimal('2018FlyBallLineDriveExitVelo', 8, 1);
        catchers.decimal('2018LaunchAngle', 8, 1);
        catchers.string('2018Barrel%', 50);
        catchers.decimal('2018BABIP', 8, 3);
        catchers.decimal('2018WOBA', 8, 3);
        catchers.decimal('2018xWOBA', 8, 3);
        catchers.decimal('2018xBA', 8, 3);
        catchers.integer('2018AvgHRDistance');
        catchers.integer('2018WRC+');
        catchers.integer('2018OPS+');
        catchers.string('2018BB%', 50);
        catchers.string('2018K%', 50);
        catchers.string('2018ChaseRate', 50);
        catchers.string('2018Contact%', 50);
        catchers.decimal('2018SprintSpeed', 8, 1);
        catchers.integer('2018StolenBases');
        catchers.string('2018StolenBase%', 4);
        catchers.decimal('2018FWAR', 8, 1);
        catchers.integer('2019GamesPlayed');
        catchers.decimal('2019BA', 8, 1);
        catchers.decimal('2019OBP', 8, 1);
        catchers.decimal('2019SLG', 8, 1);
        catchers.integer('2019PA');
        catchers.integer('20192B');
        catchers.integer('2019HR');
        catchers.integer('2019Runs');
        catchers.integer('2019RBI');
        catchers.string('2019LineupSlot', 50);
        catchers.string('2019GB%', 50);
        catchers.string('2019LD%', 50);
        catchers.string('2019FB%', 50);
        catchers.string('2019Pull%', 50);
        catchers.string('2019Center%', 50);
        catchers.string('2019Oppo%', 50);
        catchers.string('2019HR/FB%', 50);
        catchers.string('2019HardHit%', 50);
        catchers.decimal('2019ExitVelo', 8, 1);
        catchers.decimal('2019FlyBallLineDriveExitVelo', 8, 1);
        catchers.decimal('2019LaunchAngle', 8, 1);
        catchers.string('2019Barrel%', 50);
        catchers.decimal('2019BABIP', 8, 3);
        catchers.decimal('2019WOBA', 8, 3);
        catchers.decimal('2019xWOBA', 8, 3);
        catchers.decimal('2019xBA', 8, 3);
        catchers.integer('2019AvgHRDistance');
        catchers.integer('2019WRC+');
        catchers.integer('2019OPS+');
        catchers.string('2019BB%', 50);
        catchers.string('2019K%', 50);
        catchers.string('2019ChaseRate', 50);
        catchers.string('2019Contact%', 50);
        catchers.decimal('2019SprintSpeed', 8, 1);
        catchers.integer('2019StolenBases');
        catchers.string('2019StolenBase%', 4);
        catchers.decimal('2019FWAR', 8, 1);
        catchers.integer('2020SteamerPAProjection');
        catchers.decimal('2020SteamerAVGProjection', 8, 3);
        catchers.decimal('2020SteamerOBPProjection', 8, 3);
        catchers.decimal('2020SteamerSLGProjection', 8, 3);
        catchers.integer('2020SteamerHRProjection', 50);
        catchers.integer('2020SteamerRunsProjection', 50);
        catchers.integer('2020SteamerRBIProjection', 50);
        catchers.integer('2020SteamerSBProjection');
        catchers.decimal('2020SteamerFWARProjection', 8, 1);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('catchers');
};

'birthday': '',
'bats': '',
'throws': '',
'currentTeam': '',
'imageURL': '',
'primaryPosition': 'catcher',
'otherPositions': '',
'2017GamesPlayed': 0,
'2017BA': 0,
'2017OBP': 0,
'2017SLG': 0,
'2017PA': 0,
'20172B': 0,
'2017HR': 0,
'2017Runs': 0,
'2017RBI': 0,
'2017LineupSlot': '',
'2017GB%': '',
'2017LD%': '',
'2017FB%': '',
'2017Pull%': '',
'2017Center%': '',
'2017Oppo%': '',
'2017HR/FB%': '',
'2017HardHit%': '',
'2017ExitVelo': 0,
'2017FlyBallLineDriveExitVelo': 0,
'2017LaunchAngle': 0,
'2017Barrel%': '',
'2017BABIP': 0,
'2017WOBA': 0,
'2017xWOBA': 0,
'2017xBA': 0,
'2017AvgHRDistance': 0,
'2017WRC+': 0,
'2017OPS+': 0,
'2017BB%': '',
'2017K%': '',
'2017ChaseRate': '',
'2017Contact%': '',
'2017SprintSpeed': 0,
'2017StolenBases': 0,
'2017StolenBase%': '',
'2017FWAR': 0,
'2018GamesPlayed': 0,
'2018BA': 0,
'2018OBP': 0,
'2018SLG': 0,
'2018PA': 0,
'20182B': 0,
'2018HR': 0,
'2018Runs': 0,
'2018RBI': 0,
'2018LineupSlot': '',
'2018GB%': '',
'2018LD%': '',
'2018FB%': '',
'2018Pull%': '',
'2018Center%': '',
'2018Oppo%': '',
'2018HR/FB%': '',
'2018HardHit%': '',
'2018ExitVelo': 0,
'2018FlyBallLineDriveExitVelo': 0,
'2018LaunchAngle': 0,
'2018Barrel%': '',
'2018BABIP': 0,
'2018WOBA': 0,
'2018xWOBA': 0,
'2018xBA': 0,
'2018AvgHRDistance': 0,
'2018WRC+': 0,
'2018OPS+': 0,
'2018BB%': '',
'2018K%': '',
'2018ChaseRate': '',
'2018Contact%': '',
'2018SprintSpeed': 0,
'2018StolenBases': 0,
'2018StolenBase%': '',
'2018FWAR': 0,
'2019GamesPlayed': 0,
'2019BA': 0,
'2019OBP': 0,
'2019SLG': 0,
'2019PA': 0,
'20192B': 0,
'2019HR': 0,
'2019Runs': 0,
'2019RBI': 0,
'2019LineupSlot': '',
'2019GB%': '',
'2019LD%': '',
'2019FB%': '',
'2019Pull%': '',
'2019Center%': '',
'2019Oppo%': '',
'2019HR/FB%': '',
'2019HardHit%': '',
'2019ExitVelo': 0,
'2019FlyBallLineDriveExitVelo': 0,
'2019LaunchAngle': 0,
'2019Barrel%': '',
'2019BABIP': 0,
'2019WOBA': 0,
'2019xWOBA': 0,
'2019xBA': 0,
'2019AvgHRDistance': 0,
'2019WRC+': 0,
'2019OPS+': 0,
'2019BB%': '',
'2019K%': '',
'2019ChaseRate': '',
'2019Contact%': '',
'2019SprintSpeed': 0,
'2019StolenBases': 0,
'2019StolenBase%': '',
'2019FWAR': 0,
'2020SteamerPAProjection': 0,
'2020SteamerAVGProjection': 0,
'2020SteamerOBPProjection': 0,
'2020SteamerSLGProjection': 0,
'2020SteamerHRProjection': 0,
'2020SteamerRunsProjection': 0,
'2020SteamerRBIProjection': 0,
'2020SteamerSBProjection': 0,
'2020SteamerFWARProjection': 0,