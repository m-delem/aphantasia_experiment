/* ************************************ */
/* Define helper functions */
/* ************************************ */
function evalAttentionChecks() {
  var check_percent = 1
  if (run_attention_checks) {
    var attention_check_trials = jsPsych.data.getTrialsOfType('attention-check')
    var checks_passed = 0
    for (var i = 0; i < attention_check_trials.length; i++) {
      if (attention_check_trials[i].correct === true) {
        checks_passed += 1
      }
    }
    check_percent = checks_passed / attention_check_trials.length
  }
  return check_percent
}

var getInstructFeedback = function () {
  return '<div class = centerbox><p class = center-block-text>' + feedback_instruct_text +
    '</p></div>'
}

var arraysEqual = function (arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (var i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
}

var randomDraw = function (lst) {
  var index = Math.floor(Math.random() * (lst.length))
  return lst[index]
}

var setStims = function () {
  curr_seq = []
  stim_array = [first_grid]
  time_array = [1000]
  var spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
  var last_space = 0
  for (var i = 0; i < num_spaces; i++) {
    var space = randomDraw(spaces.filter(function (x) { return x != last_space }))
    last_space = space
    stim_grid = '<div class = numbox>'
    for (var j = 1; j < 26; j++) {
      if (j == space) {
        stim_grid += '<button id = button_' + j +
          ' class = "square red" ><div class = content></div></button>'
      } else {
        stim_grid += '<button id = button_' + j +
          ' class = "square"><div class = content></div></button>'
      }
    }
    stim_grid += '</div>'
    curr_seq.push(space)
    stim_array.push(stim_grid)
    time_array.push(stim_time)
  }
  console.log(stim_array)
  total_time = num_spaces * (stim_time) + 1000
}

var getTestText = function () {
  return '<div class = centerbox><div class = center-text>' + num_spaces + ' Blocs</p></div>'
}

var getStims = function () {
  return stim_array
}

var getTimeArray = function () {
  return time_array
}

var getTotalTime = function () {
  return total_time
}

var getFeedback = function () {
  return '<div class = centerbox><div class = center-text>' + feedback + '</div></div>'
}

var recordClick = function (elm) {
  response.push(Number($(elm).attr('id').slice(7)))
}

var clearResponse = function () {
  response = []
}

/* ************************************ */
/* Define experimental variables */
/* ************************************ */
// generic task variables
var run_attention_checks = false
var attention_check_thresh = 0.65
var sumInstructTime = 0 //ms
var instructTimeThresh = 0 ///in seconds

// task specific variables
var num_spaces = 3
var num_trials = 14
var curr_seq = []
var stim_time = 1000
var time_array = []
var total_time = 0
var errors = 0
var error_lim = 3
var response = []
var enter_grid = ''
var first_grid = '<div class = numbox>'
for (var i = 1; i < 26; i++) {
  first_grid += '<button id = button_' + i +
    ' class = "square" onclick = "recordClick(this)"><div class = content></div></button>'
}
var response_grid = '<div class = numbox>'
for (var i = 1; i < 26; i++) {
  response_grid += '<button id = button_' + i +
    ' class = "click_square" onclick = "recordClick(this)"><div class = content></div></button>'
}
response_grid +=
  '<button class = clear_button id = "ClearButton" onclick = "clearResponse()">Réinitialiser</button>' +
  '<button class = submit_button id = "SubmitButton">Confirmer</button></div>'
setStims()
var stim_array = getStims()

/* ************************************ */
/* Set up jsPsych blocks */
/* ************************************ */
// Set up attention check node
var attention_check_block = {
  type: 'attention-check',
  data: {
    trial_id: "attention_check"
  },
  timing_response: 180000,
  response_ends_trial: true,
  timing_post_trial: 200
}

var attention_node = {
  timeline: [attention_check_block],
  conditional_function: function () {
    return run_attention_checks
  }
}

//Set up post task questionnaire
var post_task_block = {
  type: 'survey-text',
  data: {
    trial_id: "post task questions"
  },
  questions: ['<p class = center-block-text style = "font-size: 20px">Please summarize what you were asked to do in this task.</p>',
    '<p class = center-block-text style = "font-size: 20px">Do you have any comments about this task?</p>'],
  rows: [15, 15],
  columns: [60, 60]
};

/* define static blocks */
var feedback_instruct_text =
  'Vous allez désormais passer la tâche des blocs de Corsi. Cette tâche va durer moins de 5 minutes. Appuyez sur <strong>Entrée</strong> pour commencer les instructions.'
var feedback_instruct_block = {
  type: 'poldrack-text',
  cont_key: [13],
  data: {
    trial_id: "instruction"
  },
  text: getInstructFeedback,
  timing_post_trial: 0,
  timing_response: 180000
};
/// This ensures that the subject does not read through the instructions too quickly.  If they do it too quickly, then we will go over the loop again.
var instructions_block = {
  type: 'poldrack-instructions',
  data: {
    trial_id: "instruction"
  },
  pages: [
    "<div class = centerbox><p class = block-text>Dans cette tâche, vous verrez une grille de blocs qui clignoteront en vert un par un. Vous devez vous souvenir de l'ordre dans lequel les blocs ont clignoté en vert. À la fin de chaque essai, inscrivez la séquence dans la grille dans l'ordre <strong>inverse</strong> de ce qui vous a été présenté.</p><p class = block-text>Ainsi, si une séquence de quatre blocs vous est présentée, vous devrez répondre en cliquant sur le quatrième à avoir clignoté, puis le troisième, le deuxième, et finir par le premier.</p><p class = block-text>Faites de votre mieux pour mémoriser la séquence, mais ne l'écrivez pas et n'utilisez aucun autre outil externe pour vous aider à vous en souvenir.</p><p class = block-text>Appuyez sur le bouton ci-dessous pour commencer l'expérience. </p></div>"
  ],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 1000
};

var instruction_node = {
  timeline: [feedback_instruct_block, instructions_block],
  /* This function defines stopping criteria */
  loop_function: function (data) {
    for (i = 0; i < data.length; i++) {
      if ((data[i].trial_type == 'poldrack-instructions') && (data[i].rt != -1)) {
        rt = data[i].rt
        sumInstructTime = sumInstructTime + rt
      }
    }
    if (sumInstructTime <= instructTimeThresh * 1000) {
      feedback_instruct_text =
        "Vous avez lu les coonsignes trop rapidement. Prenez votre temps et assurez-vous d'avoir bien lu les instructions. Appuyez sur <strong>Entrée</strong> pour continuer."
      return true
    } else if (sumInstructTime > instructTimeThresh * 1000) {
      feedback_instruct_text =
        'Les consignes sont terminées. Appuyez sur <strong>Entrée</strong> pour continuer.'
      return false
    }
  }
}

var end_block = {
  type: 'poldrack-text',
  data: {
    trial_id: "end",
    exp_id: 'spatial_span'
  },
  timing_response: 180000,
  text: "<div class = centerbox><p class = center-block-text>Cette tâche est terminée !</p><p class = center-block-text>Appuyez sur <strong>Entrée</strong> pour continuer l'expérience.</p></div>",
  cont_key: [13],
  timing_post_trial: 0
};


var start_test_block = {
  type: 'poldrack-single-stim',
  is_html: true,
  stimulus: getTestText,
  data: {
    trial_id: "test_intro"
  },
  choices: 'none',
  timing_stim: 1000,
  timing_response: 1000,
  response_ends_trial: false,
  timing_post_trial: 1000
};

var start_reverse_block = {
  type: 'poldrack-text',
  data: {
    trial_id: "start_reverse_intro"
  },
  timing_response: 180000,
  text: '<div class = centerbox><p class = block-text>In these next trials, instead of reporting back the sequence you just saw, report the <strong>reverse</strong> of that sequence. So the last item should be first in your response, the second to last should be the second in your response, etc...</p><p class = block-text>Press <strong>enter</strong> to begin.</p></div>',
  cont_key: [13],
  on_finish: function () {
    errors = 0
    num_spaces = 3
    stims = setStims()
  }
}

/* define test block */
var test_block = {
  type: 'poldrack-multi-stim-multi-response',
  stimuli: getStims,
  is_html: true,
  timing_stim: getTimeArray,
  choices: [
    ['none']
  ],
  data: {
    trial_id: "stim",
    exp_stage: "test"
  },
  timing_response: getTotalTime,
  timing_post_trial: 0,
  on_finish: function () {
    jsPsych.data.addDataToLastTrial({
      "sequence": curr_seq,
      "num_spaces": num_spaces
    })
  }
}


var forward_response_block = {
  type: 'single-stim-button',
  stimulus: response_grid,
  button_class: 'submit_button',
  data: {
    trial_id: "response",
    exp_stage: "test"
  },
  on_finish: function () {
    jsPsych.data.addDataToLastTrial({
      "response": response.slice(),
      "sequence": curr_seq,
      "num_spaces": num_spaces,
      "condition": "forward"
    })
    var correct = false
    // staircase
    if (arraysEqual(response, curr_seq)) {
      num_spaces += 1
      feedback = '<span style="color:green">Correct !</span>'
      stims = setStims()
      correct = true
    } else {
      errors += 1
      if (num_spaces > 1 && errors == 2) {
        num_spaces -= 1
        errors = 0
      }
      feedback = '<span style="color:red">Incorrect</span>'
      stims = setStims()
    }
    jsPsych.data.addDataToLastTrial({
      correct: correct
    })
    response = []
  },
  timing_post_trial: 500
}

var reverse_response_block = {
  type: 'single-stim-button',
  stimulus: response_grid,
  button_class: 'submit_button',
  data: {
    trial_id: "response",
    exp_stage: "test"
  },
  on_finish: function () {
    jsPsych.data.addDataToLastTrial({
      "response": response.slice(),
      "sequence": curr_seq,
      "num_spaces": num_spaces,
      "condition": "reverse"
    })
    var correct = false
    // staircase
    if (arraysEqual(response.reverse(), curr_seq)) {
      num_spaces += 1
      feedback = '<span style="color:green">Correct !</span>'
      stims = setStims()
      correct = true
    } else {
      errors += 1
      if (num_spaces > 1 && errors == 2) {
        num_spaces -= 1
        errors = 0
      }
      feedback = '<span style="color:red">Incorrect</span>'
      stims = setStims()
    }
    jsPsych.data.addDataToLastTrial({
      correct: correct
    })
    response = []
  },
  timing_post_trial: 500
}

var feedback_block = {
  type: 'poldrack-single-stim',
  stimulus: getFeedback,
  data: {
    trial_id: "feedback",
    exp_stage: "test"
  },
  is_html: true,
  choices: 'none',
  timing_stim: 1000,
  timing_response: 1000,
  response_ends_trial: true
}

/* create experiment definition array */
var spatial_span_experiment = [];
spatial_span_experiment.push(instruction_node);
for (i = 0; i < num_trials; i++) {
  spatial_span_experiment.push(start_test_block)
  spatial_span_experiment.push(test_block)
  spatial_span_experiment.push(reverse_response_block)
  spatial_span_experiment.push(feedback_block)
}
spatial_span_experiment.push(end_block)