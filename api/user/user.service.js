const User = require('./user.schema');
const Races = require('../race/race.schema');

class UserService {
  getAllUsers() {
    return User.find({});
  }

  getUserById(userId) {
    return User.findById(userId);
  }

  createNewUser(newUserProps) {
    let newUser = new User(newUserProps);
    newUser.save();
    return newUser;
  }

  async editUserById(userId, newProps) {
    await User.updateOne(
      { _id: userId },
      {
        $set: {
          name: newProps.name,
          surname: newProps.username,
          username: newProps.username,
        },
      },
    );
    return await User.findById({ _id: userId });
  }

  async deleteUserById(userId) {
    const races = await Races.find({});
    if (!races) {
      await User.deleteOne({ _id: userId });
    } else {
      await Races.deleteMany({ userId: userId });
      await User.deleteOne({ _id: userId });
    }
    return `User with id: ${userId} was successfully removed`;
  }

  getAllUsersWithRaces() {
    return User.aggregate([
      {
        $lookup: {
          from: 'races',
          localField: '_id',
          foreignField: 'userId',
          as: 'races',
        },
      },
    ]);
  }

  getAllUsersWithLeagues() {
    return User.aggregate([
      {
        $lookup: {
          from: 'leagues',
          localField: '_id',
          foreignField: 'users',
          as: 'leagues',
        },
      },
    ]);
  }
}

module.exports = UserService;
