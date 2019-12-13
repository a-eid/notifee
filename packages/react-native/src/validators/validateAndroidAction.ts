/*
 * Copyright (c) 2016-present Invertase Limited
 */

import { isArray, isBoolean, isObject, isString, hasOwnProperty, isUndefined } from '../utils';

import { AndroidAction } from '../../types/NotificationAndroid';
import validateAndroidOnPressAction from './validateAndroidPressAction';
import validateAndroidInput from './validateAndroidInput';

export default function validateAndroidAction(action: AndroidAction): AndroidAction {
  if (!isObject(action)) {
    throw new Error("'action' expected an object value.");
  }

  try {
    validateAndroidOnPressAction(action.onPressAction);
  } catch (e) {
    throw new Error(`'action' ${e.message}.`);
  }

  if (!isString(action.icon) || !action.icon) {
    throw new Error("'action.icon' expected a string value.");
  }

  if (!isString(action.title) || !action.title) {
    throw new Error("'action.title' expected a string value.");
  }

  const out: AndroidAction = {
    onPressAction: action.onPressAction,
    icon: action.icon,
    title: action.title,
  };

  if (hasOwnProperty(action, 'input') && !isUndefined(action.input)) {
    if (isBoolean(action.input) && action.input) {
      out.input = validateAndroidInput();
    } else {
      try {
        out.input = validateAndroidInput(action.input);
      } catch (e) {
        throw new Error(`'action' ${e.message}.`);
      }
    }
  }

  return out;
}