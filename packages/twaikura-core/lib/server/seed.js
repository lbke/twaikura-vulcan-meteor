import Users from 'meteor/vulcan:users';
import { createMutator } from 'meteor/vulcan:core';

Meteor.startup(async () => {
  if (Users.find().count() === 0) {
    // seed admin
    const adminEmail = Meteor.settings.admin.email;
    await createMutator({
      collection: Users,
      document: {
        username: 'admin',
        email: adminEmail,
        profile: {
          isDummy: true,
        },
      },
    });
    console.log('Created admin', adminEmail);
    // then setup user password
    const dbAdmin = Users.findOne({ email: adminEmail });
    console.log('Setting password for admin of id', dbAdmin._id);
    Accounts.setPassword(dbAdmin._id, Meteor.settings.admin.password);
  }
});
