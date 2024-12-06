import { Types } from 'mongoose'; // Import Types from mongoose
const { ObjectId } = Types; // Destructure ObjectId from Types

import keyTokenModel from "../components/models/keyToken.model.js"; // Import the keyToken model

class KeyTokenService {
  static async createKeyToken({ userId, publicKey, privateKey, refreshToken }) {

    const filter = { user: userId }
    const update = { publicKey, privateKey, refreshToken, refreshTokensUsed: [] }
    const options = { upsert: true, new: true, setDefaultsOnInsert: true }
    const tokens = await keyTokenModel.findOneAndUpdate(filter, update, options).lean()
    return tokens ? tokens.publicKey : null
  }

  static async findKeyTokenByUserID(userId) {
    return await keyTokenModel.findOne({ user: new ObjectId(userId) }) // .lean()
  }

  static async removeKeyByID(id) {
    return await keyTokenModel.deleteOne(id)
  }

  static async findByRefreshTokenUsed(refreshToken) {
    return await keyTokenModel.findOne({ refreshTokensUsed: { $in: [refreshToken] } }).lean()
  }

  static async findByRefreshToken(refreshToken) {
    return await keyTokenModel.findOne({ refreshToken }).lean()
  }

  static async removeKeyByUserId(userId) {
    return await keyTokenModel.deleteOne({ user: new ObjectId(userId) })
  }

  static async findByIdAndModify(id, { oldRefreshToken, newRefreshToken }) {
    return await keyTokenModel.findByIdAndUpdate(id, {
      $set: {
        refreshToken: newRefreshToken,
      },
      $addToSet: {
        refreshTokensUsed: oldRefreshToken
      }
    })
  }

}

export default KeyTokenService