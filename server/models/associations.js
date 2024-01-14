const Address = require('./address.model');
const Advisor = require('./advisor.model');
const Agreement = require('./agreement.model');
const CIA_Client = require('./ciaClient.model');
const Client_ERP = require('./clientERP.model');
const Consumption = require('./consumption.model');
const Price = require('./price.model');
const Proposal = require('./proposal.model');
const Total_consumption = require('./total.model');
const Type_proposal = require('./type.model');

Proposal.hasMany(Type_proposal, {foreignKey: "id"});
Type_proposal.belongsTo(Proposal, {
    foreignKey: "id_proposal",
    sourceKey: "id_proposal",
    as: "proposal",
});

Consumption.hasOne(Type_proposal, {foreignKey: "id"});
Type_proposal.belongsTo(Consumption, {
    foreignKey: "id_consumption",
    sourceKey: "id_consumption",
    as: "consumption",
});

Agreement.hasOne(Proposal, {foreignKey: "id"});
Proposal.belongsTo(Agreement, {
    foreignKey: "id_agreement",
    sourceKey: "id_agreement",
    as: "agreement",
});

Address.hasMany(Agreement, {foreignKey: "id"});
Agreement.belongsTo(Address, {
    foreignKey: "id_address",
    sourceKey: "id_address",
    as: "address",
});

Client_ERP.hasMany(Agreement, {foreignKey: "id"});
Agreement.belongsTo(Client_ERP, {
    foreignKey: "id_client_erp",
    sourceKey: "id_client_erp",
    as: "client_erp",
});

CIA_Client.hasOne(Agreement, {foreignKey: "id"});
Agreement.belongsTo(CIA_Client, {
    foreignKey: "id_cia_client",
    sourceKey: "id_cia_client",
    as: "cia_client",
});

Address.hasOne(Client_ERP, {foreignKey: "id"});
Client_ERP.belongsTo(Address, {
    foreignKey: "id_address",
    sourceKey: "id_address",
    as: "address",
});

Advisor.hasMany(Client_ERP, {foreignKey: "id", sourceKey: "id"});
Client_ERP.belongsTo(Advisor, {
    foreignKey: "id_advisor",
    sourceKey: "id_advisor",
    as: "advisor",
});

Consumption.hasOne(Total_consumption, {foreignKey: "id"});
Total_consumption.belongsTo(Consumption, {
    foreignKey: "id_consumption",
    sourceKey: "id_consumption",
    as: "consumption",
});

CIA_Client.hasOne(Consumption, {foreignKey: "id"});
Consumption.belongsTo(CIA_Client, {
    foreignKey: "id_consumption",
    sourceKey: "id_consumption",
    as: "consumption",
});

Price.hasOne(CIA_Client, {foreignKey: "id"});
CIA_Client.belongsTo(Price, {
    foreignKey: "id_price",
    sourceKey: "id_price",
    as: "price",
});