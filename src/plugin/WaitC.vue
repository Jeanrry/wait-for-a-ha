<template>
  <svg :width="scale*100" :height="scale*100" xmlns="http://www.w3.org/2000/svg">
    <g :style="{ transform: 'scale(' + scale + ')' }">
      <path
        id="37edde1103464850e4279654785e6e0d1"
        d="M75 50
                A 12.5 12.5 0 0 0 50 50
                A 12.5 12.5 0 0 1 25 50
                A 12.5 12.5 0 0 1 50 50
                A 12.5 12.5 0 0 0 75 50"
        stroke="transparent"
        fill="transparent"
      />
      <path
        id="fa4055f9b2fd1d70be7c7ecfe28360934"
        d="M50 50
                A 12.5 12.5 0 0 1 25 50
                A 12.5 12.5 0 0 1 50 50
                A 12.5 12.5 0 0 0 75 50
                A 12.5 12.5 0 0 0 50 50"
        stroke="transparent"
        fill="transparent"
      />
      <path
        id="1116bd4ce0dedbe3fc04e3d6db959c1b6"
        d="M25 50
                A 12.5 12.5 0 0 1 50 50
                A 12.5 12.5 0 0 0 75 50
                A 12.5 12.5 0 0 0 50 50
                A 12.5 12.5 0 0 1 25 50"
        stroke="transparent"
        fill="transparent"
      />
      <circle :r="rA * 5" :stroke="computedBorderColorA" :fill="colorA" stroke-width="1">
        <animateMotion dur="4s" repeatCount="indefinite">
          <mpath xlink:href="#1116bd4ce0dedbe3fc04e3d6db959c1b6" />
        </animateMotion>
      </circle>
      <circle :r="rB * 5" :stroke="computedBorderColorB" :fill="colorB" stroke-width="1">
        <animateMotion dur="4s" repeatCount="indefinite">
          <mpath xlink:href="#fa4055f9b2fd1d70be7c7ecfe28360934" />
        </animateMotion>
      </circle>
      <circle :r="rC * 5" :stroke="computedBorderColorC" :fill="colorC" stroke-width="1">
        <animateMotion dur="4s" repeatCount="indefinite">
          <mpath xlink:href="#37edde1103464850e4279654785e6e0d1" />
        </animateMotion>
      </circle>
    </g>
  </svg>
</template>

<script>
export default {
  name: "wait-c",
  props: {
    scale: {
      type: Number,
      default: 1
    },
    border: {
      type: Boolean,
      default: true
    },
    radius: {
      type: [Number, Array],
      default: 1
    },
    colorA: {
      type: String,
      default: "#000000"
    },
    borderColorA: {
      type: String,
      default: this.colorA
    },
    colorB: {
      type: String,
      default: "#000000"
    },
    borderColorB: {
      type: String,
      default: this.colorB
    },
    colorC: {
      type: String,
      default() {
        if (this.border) {
          return "transparent";
        } else {
          return "#909399";
        }
      }
    },
    borderColorC: {
      type: String,
      default() {
        if (this.border) {
          return "#000000";
        } else {
          return this.colorC;
        }
      }
    }
  },
  computed: {
    rA() {
      return this.getRadius(this.radius, 0);
    },
    rB() {
      return this.getRadius(this.radius, 1);
    },
    rC() {
      return this.getRadius(this.radius, 2);
    },
    computedBorderColorA() {
      if (this.border) {
        return this.borderColorA;
      } else {
        return this.colorA;
      }
    },
    computedBorderColorB() {
      if (this.border) {
        return this.borderColorB;
      } else {
        return this.colorB;
      }
    },
    computedBorderColorC() {
      if (this.border) {
        return this.borderColorC;
      } else {
        return this.colorC;
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    getRadius(list, index) {
      if (this.getTypeOfRadius(list) === "number") {
        return list;
      } else if (this.getTypeOfRadius(list) === "array") {
        return list[index];
      } else {
        return 1;
      }
    },
    getTypeOfRadius(value) {
      if (typeof value === "number") {
        return "number";
      } else if (
        typeof value === "object" &&
        typeof value[0] === "number" &&
        typeof value[1] === "number" &&
        typeof value[2] === "number"
      ) {
        return "array";
      } else {
        return "unexpectedType";
      }
    }
  }
};
</script>

<style scoped>
</style>
