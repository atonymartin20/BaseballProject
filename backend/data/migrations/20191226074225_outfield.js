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
        outfield.string('otherPostions', 50);
        outfield.string('2017GamesPlayed', 50);
        outfield.string('2017BA', 50);
        outfield.string('2017OBP', 50);
        outfield.string('2017SLG', 50);
        outfield.string('2017PA', 50);
        outfield.string('20172B', 50);
        outfield.string('2017HR', 50);
        outfield.string('2017Runs', 50);
        outfield.string('2017RBI', 50);
        outfield.string('2017LineupSlot', 50);
        outfield.string('2017GB%', 50);
        outfield.string('2017LD%', 50);
        outfield.string('2017FB%', 50);
        outfield.string('2017Pull%', 50);
        outfield.string('2017Center%', 50);
        outfield.string('2017Oppo%', 50);
        outfield.string('2017HR/FB%', 50);
        outfield.string('2017HardHit%', 50);
        outfield.string('2017ExitVelo', 50);
        outfield.string('2017FlyBallLineDriveExitVelo', 50);
        outfield.string('2017LaunchAngle', 50);
        outfield.string('2017Barrel%', 50);
        outfield.string('2017BABIP', 50);
        outfield.string('2017WOBA', 50);
        outfield.string('2017xWOBA', 50);
        outfield.string('2017XOPS', 50);
        outfield.string('2017xBA', 50);
        outfield.string('2017AvgHRDistance', 50);
        outfield.string('2017WRC+', 50);
        outfield.string('2017OPS+', 50);
        outfield.string('2017BB%', 50);
        outfield.string('2017K%', 50);
        outfield.string('2017ChaseRate', 50);
        outfield.string('2017Contact%', 50);
        outfield.string('2017SprintSpeed', 50);
        outfield.string('2017StolenBases', 50);
        outfield.string('2017StolenBase%', 50);
        outfield.string('2017FWAR', 50);
        outfield.string('2018GamesPlayed', 50);
        outfield.string('2018BA', 50);
        outfield.string('2018OBP', 50);
        outfield.string('2018SLG', 50);
        outfield.string('2018PA', 50);
        outfield.string('20182B', 50);
        outfield.string('2018HR', 50);
        outfield.string('2018Runs', 50);
        outfield.string('2018RBI', 50);
        outfield.string('2018LineupSlot', 50);
        outfield.string('2018GB%', 50);
        outfield.string('2018LD%', 50);
        outfield.string('2018FB%', 50);
        outfield.string('2018Pull%', 50);
        outfield.string('2018Center%', 50);
        outfield.string('2018Oppo%', 50);
        outfield.string('2018HR/FB%', 50);
        outfield.string('2018HardHit%', 50);
        outfield.string('2018ExitVelo', 50);
        outfield.string('2018FlyBallLineDriveExitVelo', 50);
        outfield.string('2018LaunchAngle', 50);
        outfield.string('2018Barrel%', 50);
        outfield.string('2018BABIP', 50);
        outfield.string('2018WOBA', 50);
        outfield.string('2018xWOBA', 50);
        outfield.string('2018XOPS', 50);
        outfield.string('2018xBA', 50);
        outfield.string('2018AvgHRDistance', 50);
        outfield.string('2018WRC+', 50);
        outfield.string('2018OPS+', 50);
        outfield.string('2018BB%', 50);
        outfield.string('2018K%', 50);
        outfield.string('2018ChaseRate', 50);
        outfield.string('2018Contact%', 50);
        outfield.string('2018SprintSpeed', 50);
        outfield.string('2018StolenBases', 50);
        outfield.string('2018StolenBase%', 50);
        outfield.string('2018FWAR', 50);
        outfield.string('2019GamesPlayed', 50);
        outfield.string('2019BA', 50);
        outfield.string('2019OBP', 50);
        outfield.string('2019SLG', 50);
        outfield.string('2019PA', 50);
        outfield.string('20192B', 50);
        outfield.string('2019HR', 50);
        outfield.string('2019Runs', 50);
        outfield.string('2019RBI', 50);
        outfield.string('2019LineupSlot', 50);
        outfield.string('2019GB%', 50);
        outfield.string('2019LD%', 50);
        outfield.string('2019FB%', 50);
        outfield.string('2019Pull%', 50);
        outfield.string('2019Center%', 50);
        outfield.string('2019Oppo%', 50);
        outfield.string('2019HR/FB%', 50);
        outfield.string('2019HardHit%', 50);
        outfield.string('2019ExitVelo', 50);
        outfield.string('2019FlyBallLineDriveExitVelo', 50);
        outfield.string('2019LaunchAngle', 50);
        outfield.string('2019Barrel%', 50);
        outfield.string('2019BABIP', 50);
        outfield.string('2019WOBA', 50);
        outfield.string('2019xWOBA', 50);
        outfield.string('2019XOPS', 50);
        outfield.string('2019xBA', 50);
        outfield.string('2019AvgHRDistance', 50);
        outfield.string('2019WRC+', 50);
        outfield.string('2019OPS+', 50);
        outfield.string('2019BB%', 50);
        outfield.string('2019K%', 50);
        outfield.string('2019ChaseRate', 50);
        outfield.string('2019Contact%', 50);
        outfield.string('2019SprintSpeed', 50);
        outfield.string('2019StolenBases', 50);
        outfield.string('2019StolenBase%', 50);
        outfield.string('2019FWAR', 50);
        outfield.string('2020SteamerPAProjection', 50);
        outfield.string('2020SteamerAVGProjection', 50);
        outfield.string('2020SteamerOBPProjection', 50);
        outfield.string('2020SteamerSLGProjection', 50);
        outfield.string('2020SteamerHRProjection', 50);
        outfield.string('2020SteamerRunsProjection', 50);
        outfield.string('2020SteamerRBIProjection', 50);
        outfield.string('2020SteamerSBProjection', 50);
        outfield.string('2020SteamerFWARProjection', 50);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('outfield');
};